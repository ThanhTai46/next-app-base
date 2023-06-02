import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { Role } from "@prisma/client";

import { UserRepo } from "repository/user";
import checkAuth from "libs/middleware/checkAuth";
import roleAuth from "libs/middleware/roleAuth";
import onError from "libs/middleware/onError";
import onNoMatch from "libs/middleware/onNoMatch";
import { IResponse } from "models/Response";

const handler = nc({ onError, onNoMatch }).use(checkAuth).use(roleAuth([Role.Admin]));

handler.get(async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  const users = await UserRepo.getAllUsers();
  res.status(200).json({ data: users });
});

export default handler;
