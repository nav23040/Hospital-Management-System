import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { CenterFocusStrong } from '@material-ui/icons';

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

function createData(name, Age, Gender, dr, date) {
   
    return {name, Age, Gender, dr, date};
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
            <StyledTableCell style={{width: 50}}>Name </StyledTableCell>
            <StyledTableCell align="center" style={{width: 50}}>Age </StyledTableCell>
            <StyledTableCell align="center" style={{width: 50}}>Gender</StyledTableCell>
            <StyledTableCell align="center" style={{width: 50}}>Doctor</StyledTableCell>
            <StyledTableCell align="center" style={{width: 50}}>Appointment Date</StyledTableCell>
            <StyledTableCell align="center" style={{width: 50}} >View Report</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="center">{row.Age}</StyledTableCell>
            <StyledTableCell align="center">{row.Gender}</StyledTableCell>
            <StyledTableCell align="center">{row.dr}</StyledTableCell>
            <StyledTableCell align="center">{row.date}</StyledTableCell>
            <Button variant="contained" color="lightsecondary"  style={{marginLeft: '35%', marginTop:'8px' }}/*onClick = {() => props.onRouteChange('patientview')} */> View </Button>
          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}