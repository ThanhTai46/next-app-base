import { NextApiRequest, NextApiResponse } from "next";

import { IResponse } from "models/Response";
import { ERROR_MESSAGES } from "constants/errors";

const roleAuth = (roles: string[]) => (req: NextApiRequest, res: NextApiResponse<IResponse>, next: Function) => {
  try {
    if (!req.user) {
      res.status(401).json({ error: ERROR_MESSAGES.UNAUTHENTICATED });
    }

    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).json({ error: ERROR_MESSAGES.UNAUTHORIZED });
    }
  } catch (error) {
    res.status(500).json({ error: ERROR_MESSAGES.INTERNAL_ERROR });
  }
};

export default roleAuth;
