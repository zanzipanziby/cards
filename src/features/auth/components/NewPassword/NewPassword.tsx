import React from "react";
import { AuthLayout } from "features/auth/components/WrapperComponent/AuthLayout/AuthLayout";
import { FormLabelComponent } from "features/auth/components/WrapperComponent/FormLabelComponent/FormLabelComponent";
import { FormGroupComponent } from "features/auth/components/WrapperComponent/FormGroupComponent/FormGroupComponent";
import { SuperInput } from "common/components/SuperInput/SuperInput";
import { DescriptionComponent } from "common/components/DescriptionComponent/DescriptionComponent";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import SuperTitle from "common/components/SuperTitle/SuperTitle";

export const NewPassword = () => {
  return (
    <AuthLayout>
      <FormLabelComponent>
        <SuperTitle
          style={{ marginBottom: "50px" }}
          title={"Create new password"}
        />
      </FormLabelComponent>
      <FormGroupComponent>
        <SuperInput type={"password"} />
        <DescriptionComponent
          title={
            "Create  new password and we will send you further \n instructions to email"
          }
          textAlign={"left"}
        />
        <SuperButton
          title={"Create new password"}
          style={{ marginTop: "20px" }}
        />
      </FormGroupComponent>
    </AuthLayout>
  );
};
