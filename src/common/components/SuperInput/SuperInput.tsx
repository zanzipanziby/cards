import React, { useState } from "react";
import { TextField } from "@mui/material";

type InputPropsType = {
  label?: string;
  variant?: "filled" | "outlined" | "standard";
  type?: "password" | "email";
  margin?: "normal" | "dense" | "none";
};
export const SuperInput = (props: InputPropsType) => {
  const [inputType, setInputType] = useState(props.type);

  return (
    <TextField
      {...props}
      type={inputType}
      variant={!props.variant ? "standard" : props.variant}
    />
  );
};
