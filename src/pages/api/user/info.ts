import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import checkAuth from "libs/middleware/checkAuth";
import onError from "libs/middleware/onError";
import onNoMatch from "libs/middleware/onNoMatch";
import { IResponse } from "models/Response";
import { UserRepo } from "repository/user";

const handler = nc({ onError, onNoMatch }).use(checkAuth);

handler.get(async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  const user = await UserRepo.getUserByEmail(req.user.email);

  if (user) {
    // @ts-ignore
    delete user.password;
  }
  return res.status(200).json({ data: user });
});

export default handler;
