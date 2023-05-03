import React from "react";

import FormLabel from "@mui/material/FormLabel/FormLabel";

type FormLabelComponentPropsType = {
  children: React.ReactNode;
};
export const FormLabelComponent = (props: FormLabelComponentPropsType) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  } as const;

  return <FormLabel style={{ ...style }}>{props.children}</FormLabel>;
};
