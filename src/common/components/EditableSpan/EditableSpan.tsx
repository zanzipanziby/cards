import React, { useState } from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Box from "@mui/material/Box";
import { SuperInput } from "common/components/SuperInput/SuperInput";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import SuperTitle from "common/components/SuperTitle/SuperTitle";
import { IconButton } from "@mui/material";

export const EditableSpan = () => {
  const [editMode, setEditMode] = useState(false);

  if (editMode) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <SuperInput />
        <SuperButton
          title={"save"}
          size={"small"}
          variant={"text"}
          onClick={() => setEditMode(false)}
        />
      </Box>
    );
  }
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SuperTitle title={"Some Name"} />
      <IconButton onClick={() => setEditMode(true)}>
        <DriveFileRenameOutlineIcon />
      </IconButton>
    </Box>
  );
};
