import React from "react";
import Box from "@mui/material/Box";
import { SuperInput } from "../../../../../common/components/SuperInput/SuperInput";
import { SliderComponent } from "../../../../../common/components/SliderComponent/SliderComponent";

export const SliderContainer = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <SuperInput
        variant={"outlined"}
        type={"number"}
        size={"small"}
        sx={{ width: "50px", marginRight: "20px" }}
      />
      <SliderComponent />
      <SuperInput
        variant={"outlined"}
        type={"number"}
        size={"small"}
        sx={{ width: "50px", marginLeft: "20px" }}
      />
    </Box>
  );
};
