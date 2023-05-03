import React from "react";
import { AuthLayout } from "features/auth/components/WrapperComponent/AuthLayout/AuthLayout";
import { FormLabelComponent } from "features/auth/components/WrapperComponent/FormLabelComponent/FormLabelComponent";
import { FormGroupComponent } from "features/auth/components/WrapperComponent/FormGroupComponent/FormGroupComponent";
import { SuperInput } from "common/components/SuperInput/SuperInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import style from "features/auth/components/SignIn/SignIn.module.css";
import { SuperCheckbox } from "common/components/SuperCheckbox/SuperCheckbox";
import { NavLink } from "react-router-dom";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import { DescriptionComponent } from "common/components/DescriptionComponent/DescriptionComponent";

export const SignUp = () => {
  return (
    <AuthLayout>
      <FormLabelComponent>
        <h2>Sign Up</h2>
      </FormLabelComponent>
      <FormGroupComponent>
        <SuperInput
          margin={"normal"}
          variant={"standard"}
          label={"Email"}
          type={"email"}
        />
        <SuperInput
          margin={"normal"}
          variant={"standard"}
          label={"Password"}
          type={"password"}
        />
        <SuperInput
          margin={"normal"}
          variant={"standard"}
          label={"Confirm password"}
          type={"password"}
        />

        <SuperButton
          title={"Sign Up"}
          style={{ margin: "50px 0 20px 0" }}
          variant={"contained"}
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
    </AuthLayout>
  );
};
