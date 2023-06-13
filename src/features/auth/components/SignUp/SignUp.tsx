import React from "react";
import { AuthLayout } from "features/auth/components/WrapperComponent/AuthLayout/AuthLayout";
import { FormLabelComponent } from "features/auth/components/WrapperComponent/FormLabelComponent/FormLabelComponent";
import { FormGroupComponent } from "features/auth/components/WrapperComponent/FormGroupComponent/FormGroupComponent";
import { SuperInput } from "common/components/SuperInput/SuperInput";
import { NavLink, useNavigate } from "react-router-dom";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import { DescriptionComponent } from "common/components/DescriptionComponent/DescriptionComponent";
import SuperTitle from "common/components/SuperTitle/SuperTitle";
import { useAppDispatch } from "common/hooks";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RegisterRequestType } from "features/auth/types/auth.request.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationValidationSchema } from "../../../../common/yap.validation";
import s from "./SignUp.module.css";
import { authActions } from "../../auth.slice";
import { toast } from "react-toastify";

type RegisterFormData = RegisterRequestType & { confirmPassword: string };

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationValidationSchema),
  });
  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    const { email, password } = data;
    await dispatch(authActions.register({ email, password }));
  };

  return (
    <AuthLayout>
      <FormLabelComponent>
        <SuperTitle title={"Sign Up"} />
      </FormLabelComponent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroupComponent>
          <Controller
            render={({ field }) => {
              return (
                <SuperInput
                  margin={"normal"}
                  variant={"standard"}
                  label={"Email"}
                  type={"email"}
                  {...field}
                />
              );
            }}
            name={"email"}
            control={control}
          />
          {errors.email && (
            <div className={s.error}>{errors.email.message}</div>
          )}
          <Controller
            render={({ field }) => {
              return (
                <SuperInput
                  margin={"normal"}
                  variant={"standard"}
                  label={"Password"}
                  type={"password"}
                  {...field}
                />
              );
            }}
            name={"password"}
            control={control}
          />
          {errors.password && (
            <div className={s.error}>{errors.password.message}</div>
          )}
          <Controller
            render={({ field }) => {
              return (
                <SuperInput
                  margin={"normal"}
                  variant={"standard"}
                  label={"Confirm password"}
                  type={"password"}
                  {...field}
                />
              );
            }}
            name={"confirmPassword"}
            control={control}
          />
          {errors.confirmPassword && (
            <div className={s.error}>{errors.confirmPassword.message}</div>
          )}
          <SuperButton
            title={"Sign Up"}
            style={{ margin: "50px 0 20px 0" }}
            variant={"contained"}
            type={"submit"}
          />
          <DescriptionComponent
            title={"Already have an account?"}
            textAlign={"center"}
          />
          <NavLink
            to={"/login"}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <SuperButton title={"Sign In"} variant={"text"} />
          </NavLink>
        </FormGroupComponent>
      </form>
    </AuthLayout>
  );
};
