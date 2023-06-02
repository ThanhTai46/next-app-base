import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import randomString from "randomstring";
import { Role } from "@prisma/client";

import { hashPassword } from "utils/auth";
import { signupSchema } from "libs/validation/schemas";
import onError from "libs/middleware/onError";
import onNoMatch from "libs/middleware/onNoMatch";
import withValidation from "libs/middleware/withValidation";
import { IResponse } from "models/Response";
import { ERROR_MESSAGES } from "constants/errors";
import { serverConfig } from "config";
import emailService from "services/server/email.service";
import { UserRepo } from "repository/user";

const validate = withValidation({
  schema: signupSchema,
  mode: "body",
});

const handler = nc({ onError, onNoMatch });

handler.post(async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  const { email, password, name, role = Role.User } = req.body;

  if (await UserRepo.checkExistingEmail(email)) {
    return res.status(400).json({ error: ERROR_MESSAGES.EMAIL_ALREADY_TAKEN });
  }
  const token = randomString.generate();

  const user = await UserRepo.createUser({
    name,
    email,
    password: await hashPassword(password),
    token,
    role,
  });

  emailService.sendEmail(email, "Verification DIPRO's Account", "verify-account", { name, link: `${serverConfig.external.url}/verify/${token}` });

  return res.status(200).json({ data: { id: user.id } });
});

export default validate(handler);
