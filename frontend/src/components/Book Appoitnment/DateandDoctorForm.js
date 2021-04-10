import React from 'react';
import {Typography, TextField, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '5%',
      marginTop : '5%',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    drop:
    {
        display: 'flex',
        marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    }

  }));

  const list = [
    { name: 'Dr Rasanpreet Singh' },
    { name: 'Dr Nikhil' },
    { name: 'Dr Abhishek' },
    { name: 'Dr Dilpreet Singh' },
    { name: 'Dr Naveen' }
  ];

export default function AddressForm(doctor) {
    const classes = useStyles();

  return (
     
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Select Date and Doctor
      </Typography>
     
      <Grid container>
      <Grid item xs ={6}>     
       <div >  
       <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Appointment Date"
        type="date"
        defaultValue="yyyy-MM-dd"
     //  onChange={(e) => date = e.target.value}
     //  onChange={onDateChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </div>
         <div className="time">
          <form className={classes.container} noValidate>
      <TextField
        id="time"
        label="Appointment Time"
        type="time"
        defaultValue="07:30"
       // onChange={(e) => doctor[0].time = e.target.value}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
    </div>
     </Grid>
     <Grid item xs ={6} style={{paddingTop: '20px'}}>   
      <Autocomplete
          id="Search Doctor"
          options={list}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
        //  onChange={(event, value) => doctor[0].name = value.name }
          renderInput={(params) => <TextField {...params} label="Search Doctor" variant="outlined"/>}
           />
       </Grid>
    </Grid>
    </React.Fragment>
  );
}


/*<Button className={classes.button} onClick={handleOpen}>
        Select Doctor
      </Button>
      <FormControl className={classes.drop}>
        <InputLabel id="demo-controlled-open-select-label">Doctor</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Dr. RasanPreet Singh</em>
          </MenuItem>
          <MenuItem value={10}>Dr. DillPreet Singh</MenuItem>
          <MenuItem value={20}>Dr. Abhisekh</MenuItem>
          <MenuItem value={30}>Dr. Naveen</MenuItem>
          <MenuItem value={30}>Dr. Nikhil</MenuItem>
        </Select>
      </FormControl> */