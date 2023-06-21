import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { convertDate } from "../../../../../common/utils/convertDate";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

type TabelCardPacksPropsType = {
  packs: FetchCardPacksResponseType | null;
};

export const TabelCardPacks: React.FC<TabelCardPacksPropsType> = ({
  packs,
}) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="left">Cards</TableCell>
          <TableCell align="left">Last Updated</TableCell>
          <TableCell align="left">Created by</TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {packs?.cardPacks.map((pack) => (
          <TableRow
            key={pack._id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {pack.name}
            </TableCell>
            <TableCell align="left">{pack.cardsCount}</TableCell>
            <TableCell align="left">{convertDate(pack.updated)}</TableCell>
            <TableCell align="left">{convertDate(pack.created)}</TableCell>
            <TableCell align="left">CRUD</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
