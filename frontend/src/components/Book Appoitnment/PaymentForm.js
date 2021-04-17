import {React,useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {  FormLabel, Radio, RadioGroup } from "@material-ui/core";

const initialFValues={
  id:0,
  Name:'',
  age:'',
  gender:'male',

}

export default function PaymentForm() {
  const[values,setvalues]=useState(initialFValues);
  const handleInputChange = e =>{
      const{ name,value} =e.target
      setvalues({
          ...values,
          [name]:value
      })
  }
  function onSubmit(){
    console.log(values);
    
    fetch('http://localhost:3000/bookappointment', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: values.Name,
            age: values.age,
            gender: values.gender,
           
        })
    })
  //  .then(response => response.json())
  //  .then(data => {
  //      console.log(data);
  //    if(data === 'success')
  //       props.onRouteChange('signin');
  //    else 
  //      alert('Invalid');  
  //  })

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
          label="Name "
          name="Name" 
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