import React from "react";
import { AuthLayout } from "features/auth/components/WrapperComponent/AuthLayout/AuthLayout";
import SuperTitle from "common/components/SuperTitle/SuperTitle";
import email from "../../../../app/assets/image/emailMessage2.svg";
import { DescriptionComponent } from "common/components/DescriptionComponent/DescriptionComponent";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import { NavLink } from "react-router-dom";
import { FormLabelComponent } from "features/auth/components/WrapperComponent/FormLabelComponent/FormLabelComponent";
import { FormGroupComponent } from "features/auth/components/WrapperComponent/FormGroupComponent/FormGroupComponent";

export const CheckEmail = () => {
  return (
    <AuthLayout>
      <FormLabelComponent>
        <SuperTitle title={"Check Email"} />
      </FormLabelComponent>
      <FormGroupComponent>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={email} alt="email" style={{ width: "200px" }} />
        </div>
        <DescriptionComponent
          textAlign={"center"}
          title={"We’ve sent an Email with instructions to \n example@mail.com"}
        />
        <NavLink to={"/login"} style={{ display: "block" }}>
          <SuperButton
            title={"Back to login"}
            style={{
              display: "block",
              width: "100%",
              marginTop: "50px",
            }}
          />
        </NavLink>
      </FormGroupComponent>
    </AuthLayout>
  );
};
