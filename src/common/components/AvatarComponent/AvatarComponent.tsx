import React from "react";
import Avatar from "@mui/material/Avatar";

type AvatarComponentPropsType = {
  style?: React.CSSProperties;
};
export const AvatarComponent = (props: AvatarComponentPropsType) => {
  return <Avatar sx={props.style} />;
};
