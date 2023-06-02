import { User } from "@prisma/client";

import prisma from "utils/db";

export class UserRepo {
  static async getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    return user;
  }

  static async getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  static async getRoleByUserId(id: number): Promise<string> {
    const user = await prisma.user.findUnique({
      where: {
        id
      },
    });

    if (!user) return "";

    return user.role;
  }

  static async createUser(data): Promise<User> {
    const user = await prisma.user.create({
      data: data
    });

    return user;
  }

  static async checkExistingEmail(email: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    return !!user;
  }

  static async checkExistingToken(token: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: {
        token
      }
    });
    return !!user;
  }

  static async markAccountAsVerified(token: string): Promise<User> {
    const user = await prisma.user.update({
      where: { token },
      data: { emailVerifiedAt: new Date() }
    });

    return user;
  }

  static async updatePassword(token: string, hashedPassword: string): Promise<User> {
    const user = await prisma.user.update({
      where: { token },
      data: { password: hashedPassword },
    });

    return user;
  }
}
