import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { decode } from "next-auth/jwt";

import { IResponse } from "models/Response";
import { ERROR_MESSAGES } from "constants/errors";
import { serverConfig } from "config";

const checkAuth = async (req: NextApiRequest, res: NextApiResponse<IResponse>, next: Function) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const user = await decode({ token, secret: serverConfig.auth.secret as string });
      if (user) {
        req.user = user;
        return next();
      }
    } else {
      const session = await getSession({ req });
      if (session) {
        req.user = session.user;
        return next();
      }
    }

    return res.status(401).json({ error: ERROR_MESSAGES.UNAUTHENTICATED });
  } catch (error) {
    res.status(500).json({ error: ERROR_MESSAGES.INTERNAL_ERROR });
  }
};

export default checkAuth;
