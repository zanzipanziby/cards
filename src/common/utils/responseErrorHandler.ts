import { AxiosError, isAxiosError } from "axios";

export const responseErrorHandler = (error: AxiosError | Error): string => {
  if (isAxiosError(error)) {
    return error.response ? error.response.data.error : error.message;
  } else {
    return error.message;
  }
};
