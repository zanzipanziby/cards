import React from "react";
import style from "./SignIn.module.css";
import { AuthLayout } from "features/auth/components/WrapperComponent/AuthLayout/AuthLayout";
import { FormGroupComponent } from "features/auth/components/WrapperComponent/FormGroupComponent/FormGroupComponent";
import { FormLabelComponent } from "features/auth/components/WrapperComponent/FormLabelComponent/FormLabelComponent";
import { SuperInput } from "common/components/SuperInput/SuperInput";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SuperCheckbox } from "common/components/SuperCheckbox/SuperCheckbox";
import { NavLink } from "react-router-dom";
import { DescriptionComponent } from "common/components/DescriptionComponent/DescriptionComponent";

export const SignIn = () => {
  return (
    <AuthLayout>
      <FormLabelComponent>
        <h2>Sign In</h2>
      </FormLabelComponent>
      <FormGroupComponent>
        <SuperInput margin={"normal"} label={"Email"} type={"email"} />
        <SuperInput margin={"normal"} label={"Password"} type={"password"} />

        <FormControlLabel
          className={style.checkboxLabel}
          control={<SuperCheckbox />}
          label={"Remember me"}
          style={{ userSelect: "none" }}
        />
        <NavLink to={"/forgot-password"} className={style.forgotPassword}>
          <span>Forgot Password?</span>
        </NavLink>
        <SuperButton title={"Sign In"} style={{ margin: "50px 0 20px 0" }} />
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
    </AuthLayout>
  );
};
