import { NextApiRequest, NextApiResponse } from "next";

import { IResponse } from "models/Response";
import logger from "services/server/logger";

const onError = (err: Error, req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  logger.error(err);
  res.status(500).json({ error: err.message });
};

export default onError;
