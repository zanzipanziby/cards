import React, { useState } from "react";
import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField/TextField";

type InputPropsType = TextFieldProps;
export const SuperInput = (props: InputPropsType) => {
  //изменяем тип инпута для visible password
  const [inputType, setInputType] = useState(props.type);

  return (
    <TextField
      {...props}
      type={inputType}
      variant={!props.variant ? "standard" : props.variant}
    />
  );
};
