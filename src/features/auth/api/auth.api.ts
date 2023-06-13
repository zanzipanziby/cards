import { instance } from "common/api/common.api";
import {
  LoginRequestType,
  RegisterRequestType,
} from "features/auth/types/auth.request.types";
import {
  ProfileType,
  RegisterResponseType,
} from "features/auth/types/auth.response.types";

export const authApi = {
  register(data: RegisterRequestType) {
    return instance.post<RegisterResponseType>("auth/register", data);
  },
  login(data: LoginRequestType) {
    return instance.post<ProfileType>("auth/login", data);
  },
  authorization(data: {}) {
    return instance.post<ProfileType>("auth/me", data);
  },
  logout(data: {}) {
    return instance.delete<{ info: string; error: string }>("auth/me", data);
  },
};
