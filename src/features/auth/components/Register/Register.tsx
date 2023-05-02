import React from "react";
import { RegisterRequestType } from "features/auth/types/auth.request.types";
import { useAppDispatch } from "app/hooks";
import { authThunk } from "features/auth/auth.slice";
import { AuthLayout } from "features/auth/components/AuthLayout/AuthLayout";

export const Register = () => {
  const dispatch = useAppDispatch();
  const registerData: RegisterRequestType = {
    email: "zanzipanziby@gmail.com",
    password: "daywalker1990",
  };

  const onClickHandler = () => {
    dispatch(authThunk.register(registerData));
  };
  return (
    <AuthLayout title={"Sign Up"}>
      <button onClick={onClickHandler}>register</button>
    </AuthLayout>
  );
};
