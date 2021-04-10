import {React,useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {  FormLabel, Radio, RadioGroup } from "@material-ui/core";

const initialPatientValues={
  name:'',
  age:'',
  gender:'male',

}

export default function PaymentForm() {
  const[values,setvalues]=useState(initialPatientValues);

  const handleInputChange = e =>{
      const{name,value} =e.target
      setvalues({
          ...values,
          [name]:value
      })
  }
  
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required
          id="cardName" 
          label="Name"
          name="name" 
          fullWidth autoComplete="cc-name"
          value={values.name}
           onChange={handleInputChange}
           />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Age"
            name="age"
            fullWidth
            autoComplete="cc-number"
            value={values.age}
           onChange={handleInputChange}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
        <FormLabel required>Gender</FormLabel>
                <RadioGroup row>
                    <FormControlLabel value= "male"  control = {<Radio/>} label="Male"/>
                    <FormControlLabel value= "female" control = {<Radio/>} label="Female"/>
                    <FormControlLabel value= "others" control = {<Radio/>} label="Others"/>
                </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember details for next time"
          />
        </Grid>
      </Grid>
    </>
  );
}