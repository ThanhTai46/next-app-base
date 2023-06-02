import NextAuth, { getServerSession, NextAuthOptions, SessionOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "utils/db";
import { verifyPassword } from "utils/auth";
import { signInSchema } from "libs/validation/schemas";
import { ERROR_MESSAGES } from "constants/errors";
import { serverConfig } from "config";
import { UserRepo } from "repository/user";

export const SESSION_LIFESPAN = {
  DEFAULT: 1 * 24 * 60 * 60, // 1 day
  REMEMBER_ME: 7 * 24 * 60 * 60, // 7 days
};

const DEFAULT_SESSION_OPTIONS: Partial<SessionOptions> = {
  strategy: "jwt",
  maxAge: SESSION_LIFESPAN.DEFAULT,
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const sessionOptions = { ...DEFAULT_SESSION_OPTIONS };

  const serverSession = await getServerSession(req, res, DEFAULT_NEXT_AUTH_OPTIONS);
  if (serverSession?.user?.rememberMe) {
    sessionOptions.maxAge = SESSION_LIFESPAN.REMEMBER_ME;
  }
  const nextAuthOptions = { ...DEFAULT_NEXT_AUTH_OPTIONS, session: sessionOptions };
  return await NextAuth(req, res, nextAuthOptions);
}

const DEFAULT_NEXT_AUTH_OPTIONS: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
        return signIn(credentials);
      },
    }),
  ],

  adapter: PrismaAdapter(prisma),
  secret: serverConfig.auth.secret,
  jwt: {
    secret: serverConfig.auth.secret,
  },
  session: DEFAULT_SESSION_OPTIONS,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const role = await UserRepo.getRoleByUserId(Number(user.id));
        token.userId = Number(user.id);
        token.role = role;
        token.rememberMe = user.rememberMe;
      }
      return token;
    },

    async session({ session, token }) {
      if (token?.role) {
        session.user.id = token.userId;
        session.user.role = token.role;
        session.user.rememberMe = token.rememberMe;
      }

      return session;
    },

    async redirect({ url }) {
      return url;
    },
  }
};

export const signIn = async (credentials) => {
  signInSchema.validateSync(credentials);
  const { email, password, rememberMe } = credentials;
  const user = await UserRepo.getUserByEmail(email);

  if (!user) {
    throw new Error(ERROR_MESSAGES.INVALID_CREDENTIAL);
  }

  if (!user.password) {
    throw new Error(ERROR_MESSAGES.INVALID_CREDENTIAL);
  }

  if (!(await verifyPassword(password, user.password))) {
    throw new Error(ERROR_MESSAGES.INVALID_CREDENTIAL);
  }

  if (!user.emailVerifiedAt) {
    throw new Error(ERROR_MESSAGES.ACCOUNT_NOT_VERIFY);
  }

  const authUser = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    rememberMe: rememberMe === "true",
  };

  return authUser;
};
