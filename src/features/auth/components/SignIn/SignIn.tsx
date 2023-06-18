import React from "react";
import style from "./SignIn.module.css";
import { AuthLayout } from "features/auth/components/WrapperComponent/AuthLayout/AuthLayout";
import { FormGroupComponent } from "features/auth/components/WrapperComponent/FormGroupComponent/FormGroupComponent";
import { FormLabelComponent } from "features/auth/components/WrapperComponent/FormLabelComponent/FormLabelComponent";
import { SuperInput } from "common/components/SuperInput/SuperInput";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SuperCheckbox } from "common/components/SuperCheckbox/SuperCheckbox";
import { NavLink, useNavigate } from "react-router-dom";
import { DescriptionComponent } from "common/components/DescriptionComponent/DescriptionComponent";
import SuperTitle from "common/components/SuperTitle/SuperTitle";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { authThunk } from "features/auth/auth.slice";
import { LoginRequestType } from "features/auth/types/auth.request.types";
import { useAppDispatch } from "common/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../../../common/yap.validation";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestType>({
    resolver: yupResolver(loginValidationSchema),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<LoginRequestType> = (data) => {
    dispatch(authThunk.login(data))
      .unwrap()
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {});
  };

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
                label={errors.email ? errors.email.message : "Email"}
                error={!!errors.email}
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
                type={"password"}
                label={errors.password ? errors.password.message : "Password"}
                error={!!errors.password}
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
