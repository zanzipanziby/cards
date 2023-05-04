import React, { useEffect } from "react";
import style from "./SignIn.module.css";
import { AuthLayout } from "features/auth/components/WrapperComponent/AuthLayout/AuthLayout";
import { FormGroupComponent } from "features/auth/components/WrapperComponent/FormGroupComponent/FormGroupComponent";
import { FormLabelComponent } from "features/auth/components/WrapperComponent/FormLabelComponent/FormLabelComponent";
import { SuperInput } from "common/components/SuperInput/SuperInput";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SuperCheckbox } from "common/components/SuperCheckbox/SuperCheckbox";
import { Navigate, NavLink } from "react-router-dom";
import { DescriptionComponent } from "common/components/DescriptionComponent/DescriptionComponent";
import SuperTitle from "common/components/SuperTitle/SuperTitle";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { authThunk } from "features/auth/auth.slice";
import { LoginRequestType } from "features/auth/types/auth.request.types";
import { useAppDispatch, useAppSelector } from "app/hooks";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const { control, handleSubmit } = useForm<LoginRequestType>();
  const onSubmit: SubmitHandler<LoginRequestType> = (data) => {
    dispatch(authThunk.login(data));
  };
  if (isLoggedIn) {
    return <Navigate to={"/profile"} />;
  }
  //TODO реализовать запрос аус ми чтобы приложение знало, что мы залогенены
  return (
    <AuthLayout>
      <FormLabelComponent>
        <SuperTitle title={"Sign In"} />
      </FormLabelComponent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroupComponent>
          <Controller
            control={control}
            render={({ field }) => (
              <SuperInput
                margin={"normal"}
                label={"Email"}
                type={"email"}
                {...field}
              />
            )}
            name={"email"}
          />
          <Controller
            control={control}
            render={({ field }) => (
              <SuperInput
                margin={"normal"}
                label={"Password"}
                type={"password"}
                {...field}
              />
            )}
            name={"password"}
          />

          <FormControlLabel
            className={style.checkboxLabel}
            control={
              <Controller
                render={({ field }) => <SuperCheckbox {...field} />}
                name={"rememberMe"}
                control={control}
              />
            }
            label={"Remember me"}
            style={{ userSelect: "none" }}
          />
          <NavLink to={"/forgot-password"} className={style.forgotPassword}>
            <span>Forgot Password?</span>
          </NavLink>
          <SuperButton
            title={"Sign In"}
            style={{ margin: "50px 0 20px 0" }}
            type={"submit"}
          />

          <DescriptionComponent
            title={"Don't have an account?"}
            textAlign={"center"}
          />
          <NavLink
            to={"/register"}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <SuperButton title={"Sign Up"} variant={"text"} />
          </NavLink>
        </FormGroupComponent>
      </form>
    </AuthLayout>
  );
};
