import React from "react";
import { AuthLayout } from "features/auth/components/WrapperComponent/AuthLayout/AuthLayout";
import { FormLabelComponent } from "features/auth/components/WrapperComponent/FormLabelComponent/FormLabelComponent";
import { FormGroupComponent } from "features/auth/components/WrapperComponent/FormGroupComponent/FormGroupComponent";
import { SuperInput } from "common/components/SuperInput/SuperInput";
import { Navigate, NavLink } from "react-router-dom";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import { DescriptionComponent } from "common/components/DescriptionComponent/DescriptionComponent";
import SuperTitle from "common/components/SuperTitle/SuperTitle";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RegisterRequestType } from "features/auth/types/auth.request.types";

type RegisterFormData = RegisterRequestType & { confirmPassword: string };

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const isRegistered = useAppSelector((state) => state.auth.isRegistered);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    const { email, password } = data;
    const registerRequestData = { email, password };
    alert(JSON.stringify(registerRequestData));
  };

  if (isRegistered) {
    return <Navigate to={"/login"} />;
  }
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
