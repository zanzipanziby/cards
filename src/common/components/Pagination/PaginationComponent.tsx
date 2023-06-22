import * as React from "react";
import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationComponentPropsType = {
  callback: (page: number) => void;
  count: number;
  page: number;
};

export const PaginationComponent: React.FC<PaginationComponentPropsType> = ({
  callback,
  count,
  page,
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    callback(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        color={"primary"}
        count={count}
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};
