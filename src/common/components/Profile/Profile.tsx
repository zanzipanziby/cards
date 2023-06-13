import React from "react";
import { AuthLayout } from "features/auth/components/WrapperComponent/AuthLayout/AuthLayout";
import { FormLabelComponent } from "features/auth/components/WrapperComponent/FormLabelComponent/FormLabelComponent";
import SuperTitle from "common/components/SuperTitle/SuperTitle";
import { FormGroupComponent } from "features/auth/components/WrapperComponent/FormGroupComponent/FormGroupComponent";
import { AvatarComponent } from "common/components/AvatarComponent/AvatarComponent";
import { EditableSpan } from "common/components/EditableSpan/EditableSpan";
import { DescriptionComponent } from "common/components/DescriptionComponent/DescriptionComponent";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { profileSelect } from "../../../features/auth/auth.selectors";
import { authActions } from "../../../features/auth/auth.slice";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const profile = useAppSelector(profileSelect);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout())
      .unwrap()
      .then(() => navigate("/login"));
  };

  return (
    <AuthLayout>
      <FormLabelComponent>
        <SuperTitle title={"Personal Information"} />
      </FormLabelComponent>
      <FormGroupComponent>
        <AvatarComponent
          style={{ margin: "0 auto", width: "100px", height: "100px" }}
        />
        <EditableSpan title={profile?.name ? profile.name : "Some name"} />
        <DescriptionComponent
          title={profile?.email ? profile.email : "some@email.com"}
          textAlign={"center"}
        />
        <div style={{ margin: "0 auto" }}>
          <SuperButton
            title={"Log out"}
            color={"secondary"}
            startIcon={<LogoutIcon />}
            onClick={logoutHandler}
          />
        </div>
      </FormGroupComponent>
    </AuthLayout>
  );
};
