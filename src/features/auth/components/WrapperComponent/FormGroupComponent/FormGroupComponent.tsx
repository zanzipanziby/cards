import React from "react";
import FormGroup from "@mui/material/FormGroup/FormGroup";

type FormGroupComponentPropsType = {
  children: React.ReactNode;
};
export const FormGroupComponent = (props: FormGroupComponentPropsType) => {
  return <FormGroup>{props.children}</FormGroup>;
};

