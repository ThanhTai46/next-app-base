import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import onError from "libs/middleware/onError";
import onNoMatch from "libs/middleware/onNoMatch";
import { IResponse } from "models/Response";
import logger from "services/server/logger";

const handler = nc({ onError, onNoMatch });

handler.post(async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  const { error } = req.body;
  logger.error(error.stack || error.message);
  res.status(200).json({ data: null });
});

export default handler;
