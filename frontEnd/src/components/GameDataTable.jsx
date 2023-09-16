import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import RemoveDialog from "./RemoveDialog";

var rows = {};
var rowsArray = [];
fetch("http://localhost:81/games")
      .then(response => {
        rows = response.json()
      });

rowsArray = Object.entries(rows).forEach(([key, value]) => rowsArray.push({[key]: value}));

  const handleClickOpen = () => {
    return <RemoveDialog/>
    
  };

export default function GameDataTable() {
  return (
    <TableContainer component={Paper}>
      <Table width="100" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="left">url</TableCell>
            <TableCell align="center">rating</TableCell>
            <TableCell align="center" colSpan={2}>action</TableCell>
          </TableRow>
        </TableHead >
        <TableBody>
          {rowsArray.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.url}</TableCell>
              <TableCell align="center">{row.rating}</TableCell>
              <TableCell align="right"><Button variant="contained">edit</Button></TableCell>
              <TableCell align="left"><Button onClick={handleClickOpen} variant="contained">remove</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}