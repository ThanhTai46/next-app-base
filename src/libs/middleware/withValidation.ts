import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";
import type Lazy from "yup/lib/Lazy";
import { ValidateOptions } from "yup/lib/types";

import { IResponse } from "models/Response";

type Validation = {
  mode?: "body" | "query" | "param" | "headers";
  schema: any;
  options?: ValidateOptions
  overrideOriginal?: Boolean
};

function yupResolver<T extends Yup.AnyObjectSchema | Lazy<any>>(schema: T) {
  return {
    validate: (data: unknown, options?: ValidateOptions) => schema.validateSync(data, options),
  };
}

export default function withValidation({ schema, mode = "query", options, overrideOriginal = false }: Validation) {
  return (handler: any) => {
    return async (req: NextApiRequest, res: NextApiResponse<IResponse>, next?: any) => {
      try {
        const resolver = yupResolver(schema);
        const validatedObj = resolver.validate(req[mode], options);

        if (overrideOriginal) {
          req[mode] = validatedObj;
        }

        if (next) {
          return next();
        }
        return handler(req, res);
      } catch (error) {
        res.status(400).send({ error: error.message, data: error });
      }
    };
  };
}
