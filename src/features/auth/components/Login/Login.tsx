import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunk } from "features/auth/auth.slice";
import { LoginRequestType } from "features/auth/types/auth.request.types";
import { AuthLayout } from "features/auth/components/AuthLayout/AuthLayout";

export const Login = () => {
  const dispatch = useAppDispatch();
  const loginData: LoginRequestType = {
    email: "zanzipanziby@gmail.com",
    password: "daywalker1990",
    rememberMe: true,
  };
  const loginHandler = () => {
    dispatch(authThunk.login(loginData));
  };
  return (
    <div>
      <AuthLayout title={"Sign In"}>
        <button onClick={loginHandler}>login</button>
      </AuthLayout>
    </div>
  );
};
