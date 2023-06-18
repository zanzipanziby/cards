import React, { ChangeEvent, useState } from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Box from "@mui/material/Box";
import { SuperInput } from "common/components/SuperInput/SuperInput";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import SuperTitle from "common/components/SuperTitle/SuperTitle";
import { IconButton } from "@mui/material";

type EditableSpanPropsType = {
  title: string;
  callback: (text: string) => Promise<unknown>;
};

export const EditableSpan = (props: EditableSpanPropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(props.title);
  const [error, setError] = useState(null as null | string);
  const [isDisable, setIsDisable] = useState(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    setError(null);
  };

  const updateText = async () => {
    if (text.trim()) {
      setIsDisable(true);
      await props.callback(text.trim());
      setEditMode(false);
      setIsDisable(false);
    } else {
      setError("Can't be empty");
    }
  };

  if (editMode) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SuperInput
            onChange={onChangeHandler}
            error={!!error}
            value={text}
            disabled={isDisable}
          />
          <SuperButton
            title={"save"}
            size={"small"}
            variant={"text"}
            onClick={updateText}
          />
        </Box>
        {error && <div>{error}</div>}
      </>
    );
  }
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SuperTitle title={props.title} />
      <IconButton onClick={() => setEditMode(true)}>
        <DriveFileRenameOutlineIcon />
      </IconButton>
    </Box>
  );
};
