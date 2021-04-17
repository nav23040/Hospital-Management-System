import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
// import './stlye.css'
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
export default function AddressForm() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
  
  return (
     
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Search Doctor
      </Typography>
      <div className="col-sm-4">
          
         <div >     
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Appointment Date"
        type="date"
        defaultValue="2000-04-23"
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
    <div className="drop">
      <Button className={classes.button} onClick={handleOpen}>
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
      </FormControl>
    </div>
     
          </div>
    </React.Fragment>
  );
}