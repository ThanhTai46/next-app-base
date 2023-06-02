import axios from "axios";

import { IResponse } from "models/Response";

const APIs = {
  ERROR_REPORT: "/api/error/report",
};

export const reportError = async (error: Partial<Error>) => {
  const { data }: { data: IResponse } = await axios.post(APIs.ERROR_REPORT, {
    error
  });
  return data.data;
};
