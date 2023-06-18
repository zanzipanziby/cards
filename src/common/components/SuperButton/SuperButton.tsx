import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import style from "./SuperButton.module.css";

type SuperButtonPropsType = ButtonProps & { isRectangular?: boolean };

export const SuperButton = (props: SuperButtonPropsType) => {
  return (
    <Button
      {...props}
      variant={!props.variant ? "contained" : props.variant}
      className={props.isRectangular ? "" : style.button}
      color={props.color}
    >
      {props.title}
    </Button>
  );
};
