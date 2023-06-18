import Paper from "@mui/material/Paper";
import React from "react";
import style from "./PacksLayout.module.css";

type AuthLayoutPropsType = {
  children: React.ReactNode;
};
export const PacksLayout = (props: AuthLayoutPropsType) => {
  return (
    <Paper className={style.layout} elevation={3}>
      {props.children}
    </Paper>
  );
};
