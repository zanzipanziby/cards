import React from "react";
import { AuthLayout } from "./WrapperComponent/AuthLayout/AuthLayout";
import SuperTitle from "../../../common/components/SuperTitle/SuperTitle";
import { SuperInput } from "../../../common/components/SuperInput/SuperInput";
import { DescriptionComponent } from "../../../common/components/DescriptionComponent/DescriptionComponent";
import { FormLabelComponent } from "./WrapperComponent/FormLabelComponent/FormLabelComponent";
import { SuperButton } from "../../../common/components/SuperButton/SuperButton";
import { FormGroupComponent } from "./WrapperComponent/FormGroupComponent/FormGroupComponent";

export const ForgotPassword = () => {
  //todo it is necessary to implement the password recovery process
  return (
    <AuthLayout>
      <FormLabelComponent>
        <SuperTitle title={"Forgot your password"} />
      </FormLabelComponent>
      <FormGroupComponent>
        <SuperInput label={"Email"} />
        <DescriptionComponent
          title={
            "Enter your email address and we will send you further \n instructions "
          }
        />
        <SuperButton
          title={"Send Instructions"}
          style={{ margin: "50px 0 20px 0" }}
        />
      </FormGroupComponent>
    </AuthLayout>
  );
};
