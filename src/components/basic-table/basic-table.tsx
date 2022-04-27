import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button/Button';


function createData(
  price: number,
  from: {name: string, src: string},
  time: string,
  operation: string,
) {
  return { price, from, time, operation };
}

const rows = [
  createData(330, {name: 'Peter', src: 'peter'}, '04/02/2022', 'Accept'),
  createData(230, {name: 'John', src: 'peter'}, '04/03/2022', 'Accept'),
  createData(401, {name: 'Rose', src: 'peter'}, '04/04/2022', 'Accept'),
];

interface BasicTableProps {
  operationCallBack: () => void
}

export default function BasicTable({ operationCallBack }: BasicTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Price(Euro)</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right" sx={{position: "sticky",right: 0, backgroundColor: 'white'}}>Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={`priceOffer_${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.price}
              </TableCell>
              <TableCell align="right">
                <a href="">
                  {row.from.name}
                </a>
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right" sx={{position: "sticky",right: 0, backgroundColor: 'white'}}>
                {<Button size='small' onClick={operationCallBack}>{row.operation}</Button>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}