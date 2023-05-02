import Paper from "@mui/material/Paper";
import React from "react";
import style from "./Layout.module.css";

type AuthLayoutPropsType = {
  title: string;
  children: React.ReactNode;
};
export const AuthLayout = (props: AuthLayoutPropsType) => {
  return (
    <Paper className={style.layout}>
      <h2 className={style.title}>{props.title}</h2>
      {props.children}
    </Paper>
  );
};
