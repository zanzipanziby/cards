import * as React from "react";
import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationComponentPropsType = {
  callback: (page: number) => void;
  count: number;
};

export const PaginationComponent: React.FC<PaginationComponentPropsType> = ({
  callback,
  count,
}) => {
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    callback(page);
  }, [page]);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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
