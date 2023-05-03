import Paper from "@mui/material/Paper";
import React from "react";
import style from "features/auth/components/WrapperComponent/AuthLayout/AuthLayout.module.css";

type AuthLayoutPropsType = {
  children: React.ReactNode;
};
export const AuthLayout = (props: AuthLayoutPropsType) => {
  return (
    <Paper className={style.layout} elevation={3}>
      {props.children}
    </Paper>
  );
};
