import React from "react";
import { RegisterRequestType } from "features/auth/types/auth.request.types";
import { useAppDispatch } from "app/hooks";
import { authThunk } from "features/auth/auth.slice";

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
    <div>
      <button onClick={onClickHandler}>register</button>
    </div>
  );
};
