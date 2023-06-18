import React from "react";
import { SuperButton } from "../../../../../common/components/SuperButton/SuperButton";
import ButtonGroup from "@mui/material/ButtonGroup";

export const ButtonGroupComponent = () => {
  return (
    <ButtonGroup>
      <SuperButton title={"My Cards"} isRectangular />
      <SuperButton title={"All Cards"} isRectangular />
    </ButtonGroup>
  );
};
