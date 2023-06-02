import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { encode } from "next-auth/jwt";

import onError from "libs/middleware/onError";
import onNoMatch from "libs/middleware/onNoMatch";
import { serverConfig } from "config";
import { SESSION_LIFESPAN, signIn } from "pages/api/auth/[...nextauth]";

const handler = nc({ onError, onNoMatch });

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const authUser = await signIn(req.body);
  const { rememberMe } = req.body;
  const maxAge = rememberMe ? SESSION_LIFESPAN.REMEMBER_ME : SESSION_LIFESPAN.DEFAULT;

  const token = await encode({
    token: authUser as any,
    secret: serverConfig.auth.secret as string,
    maxAge
  });

  return res.status(200).json({
    token,
    expiresIn: maxAge
  });
});

export default handler;
