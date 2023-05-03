import React from "react";
import Button from "@mui/material/Button";
import style from "./SuperButton.module.css";

type SuperButtonPropsType = {
  title: string;
  onClick?: () => void;
  variant?: "contained" | "text" | "outlined";
  onSubmit?: () => void;
  style?: React.CSSProperties;
};

export const SuperButton = (props: SuperButtonPropsType) => {
  return (
    <Button
      {...props}
      variant={!props.variant ? "contained" : props.variant}
      className={style.button}
    >
      {props.title}
    </Button>
  );
};
