import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PageHeader from "./Registration/PageHeader"
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, TextField} from '@material-ui/core';
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

function createData(name, Age, Gender, dr, date, time, disease, prescription, symptoms) {
    return {name, Age, Gender, dr, date, time, disease, prescription, symptoms};
  }

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  root1: {
    '& .MuiFormControl-root': {
        width: '60%',
        margin: theme.spacing(1),
        // leftMargin:'100px'
    }
   },   
  container: {
    maxHeight: '100%',
  },
}));


const DarkerDisabledTextField = withStyles({
  root: {
    marginRight: 8,
    "& .MuiInputBase-root.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.9)" // (default alpha is 0.38)
    }
  }
})(TextField);

export default function CustomizedTables(props) {
  
  const [route, setRoute] = useState('all');
  const [selectedData, setSelData] = useState([]);

   function onRouteChange(r,data){
     setSelData(data);
     setRoute(r);
   }

   function setData(data){
      const rows = [];
     //console.log(data);
      data.map((details) => (
        rows.push(createData(details.patient_name, details.patient_age, details.gender, details.doctor_name, details.app_date, details.app_time, details.disease, details.prescription, details.symptoms))
      )) 
      return rows;
   }

  const rows = setData(props.history);
  const classes = useStyles();
 
  if(route === 'all'){
    return (
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{width: 50}}>Name </StyledTableCell>
              <StyledTableCell align="center" style={{width: 50}}>Age </StyledTableCell>
              <StyledTableCell align="center" style={{width: 50}}>Gender</StyledTableCell>
              <StyledTableCell align="center" style={{width: 50}}>Doctor Name</StyledTableCell>
              <StyledTableCell align="center" style={{width: 50}}>Appointment Date</StyledTableCell>
              <StyledTableCell align="center" style={{width: 50}}>Appointment Time</StyledTableCell>
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
              <StyledTableCell align="center">Dr. {row.dr}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <Button variant="contained" color="lightsecondary"  style={{marginLeft: '35%', marginTop:'8px' }} onClick = {() => onRouteChange('patient', row)} > View </Button>
            </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      );
    }
  
  else if(route === 'patient'){
    return (
      <Paper style={{marginTop:"3%",marginLeft:"4"}}>
          <PageHeader
              title=" PATIENT HISTORY  :"
          />

          <form className={classes.root1}>
              <Grid container>
                  <Grid item xs={6}>
                     <DarkerDisabledTextField required
                          variant="outlined"
                          label="Patient Name "
                          name="name"
                          type='text'
                          disabled
                          value={selectedData.name}
                      />

                      <DarkerDisabledTextField required
                          variant="outlined"
                          label="Age(in Years)"
                          name='age'
                          type="number"
                          disabled
                          value={selectedData.Age}
                      />
                    
                    <DarkerDisabledTextField required
                          variant="outlined"
                          label="Medical prescription "
                          name="prescription"
                          type='text'
                          multiline={true}
                          rows={3}
                          disabled
                          value={selectedData.prescription}
                      />

                  </Grid>
                  <Grid item xs={6}>
                      <DarkerDisabledTextField required
                            variant="outlined"
                            label="Gender"
                            name="gender"
                            type='text'
                            disabled
                            value={selectedData.Gender}
                      /> 

                      <DarkerDisabledTextField required
                          variant="outlined"
                          label="Symptoms "
                          name="symptoms"
                          type='text'
                          multiline={true}
                          rows={2}
                          disabled
                          value={selectedData.symptoms}
                        
                      />

                      <DarkerDisabledTextField required
                          variant="outlined"
                          label="Disease"
                          type='text'
                          disabled
                          value={selectedData.disease}
                        
                      />
                     

                  </Grid>
              </Grid>
              <Grid style={{display:'flex',justifyContent:"center", padding: "10px",}}>
              <Button  onClick = {() => onRouteChange('all')}   >
               Go Back
              </Button>
              </Grid>
          </form>
      </Paper>
     )

  } 
}