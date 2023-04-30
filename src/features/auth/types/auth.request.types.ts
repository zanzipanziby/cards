export type RegisterRequestType = {
  email: string;
  password: string;
};

export type LoginRequestType = RegisterRequestType & { rememberMe: boolean };
