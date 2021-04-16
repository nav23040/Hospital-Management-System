import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, Age, Gender, dr, date, days, symptons, diagnosis, med) {
   
    return {name, Age, Gender, dr, date, days, symptons, diagnosis, med};
  }


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function CustomizedTables(props) {
    
    const rows = [
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        createData('Rasan', 21, 'Male', 'Dr. Ballu', '21-10-2021',7, 'XYZ', 'ABC', 'Pracetamol' ),
        
      ];
  const classes = useStyles();
  

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right" style={{width: 50}}>Age </StyledTableCell>
            <StyledTableCell align="right" >Gender</StyledTableCell>
            <StyledTableCell align="right" >Doctor</StyledTableCell>
            <StyledTableCell align="right" >Appointment Date</StyledTableCell>
            <StyledTableCell align="right" >Addmitted Day's</StyledTableCell>
            <StyledTableCell align="right" >Symptoms</StyledTableCell>
            <StyledTableCell align="right">Diagnosis</StyledTableCell>
            <StyledTableCell align="right">Medicine</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="right">{row.Age}</StyledTableCell>
            <StyledTableCell align="right">{row.Gender}</StyledTableCell>
            <StyledTableCell align="right">{row.dr}</StyledTableCell>
            <StyledTableCell align="right">{row.date}</StyledTableCell>
            <StyledTableCell align="right">{row.days}</StyledTableCell>
            <StyledTableCell align="right">{row.symptons}</StyledTableCell>
            <StyledTableCell align="right">{row.diagnosis}</StyledTableCell>
            <StyledTableCell align="right">{row.med}</StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}