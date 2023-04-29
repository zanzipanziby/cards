import { instance } from "common/api/common.api";
import { RegisterRequestType } from "features/auth/types/auth.request.types";
import { RegisterResponseType } from "features/auth/types/auth.response.types";

export const authApi = {
  register(data: RegisterRequestType) {
    return instance.post<RegisterResponseType>("auth/register", data);
  },
};
