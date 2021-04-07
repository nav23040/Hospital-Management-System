import { React, useState} from "react";
import PageHeader from "./PageHeader"
import { makeStyles, Paper } from "@material-ui/core";
import { FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@material-ui/core";
import UploadButtons from './submitbutton'

const useStyles = makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    },
    root:{
        '& .MuiFormControl-root':{
            width :'60%',
            margin:theme.spacing(1),
            // leftMargin:'100px'
        }
    }
}))

const initialFValues={
    id:0,
    fullName:'',
    age:'',
    mobile:'',
    email: '',
    password: '',
    address:'',
    gender:'male',
    fatherName:'',
    motherName:'',
    parentMobile:'',
  
}

export default function Patient(props){

    const[values,setvalues]=useState(initialFValues);
    const classes = useStyles();
    const handleInputChange = e =>{
        const{ name,value} =e.target
        setvalues({
            ...values,
            [name]:value
        })
    }

    function onSubmit(){
        console.log(values);
        
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: values.fullName,
                email: values.email,
                password: values.password,
                age: values.age,
                gender: values.gender,
                mobile: values.mobile,
                address: values.address,
                fatherName: values.fatherName,
                motherName: values.motherName,
                parentMobile: values.parentMobile
            })
        })
       .then(response => response.json())
       .then(data => {
           console.log(data);
         if(data === 'success')
         props.onRouteChange('signin');
         
         else
           alert('Invalid');
              
       })

    }

    return(  
      <Paper className = {classes.pageContent}>
      <PageHeader
      title =" PATIENT REGISTRATION FORM  :"
      subTitle=" (All the fields marked with (*) are mandatory)  "
      
      />
      <PageHeader
      title ="Patient Details:"
      subTitle=""
      />
      
      <form className = {classes.root}>
      
        <Grid container>
            <Grid item xs ={6}>
            <TextField required
                 variant = "outlined"
                 label="Full Name"
                 name="fullName"
                 type = 'text'
                 value={values.fullName}
                 onChange={handleInputChange}
                 />

            <TextField required
                 variant = "outlined"
                 label="Email ID"
                 name="email"
                 type = 'text'
                 value={values.email}
                 onChange={handleInputChange}
                 />   

             <TextField required
                  variant="outlined"
                  label="Date of Birth"
                  name='age'
                  type="date"
                  value={values.age}
                  onChange={handleInputChange}
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }    }
                   />     
                 
            </Grid>
            <Grid item xs ={6}>
                <FormLabel required>Gender</FormLabel>
                <RadioGroup row>
                    <FormControlLabel value= "male"  control = {<Radio/>} label="Male"/>
                    <FormControlLabel value= "female" control = {<Radio/>} label="Female"/>
                    <FormControlLabel value= "others" control = {<Radio/>} label="Others"/>
                </RadioGroup>

                 <TextField required
                 variant = "outlined"
                 label="Password"
                 name="password"
                 type = 'password'
                 value={values.password}
                 onChange={handleInputChange}
                 /> 

                <TextField required
                 variant = "outlined"
                 label="Phone Number"
                 name="mobile"
                 type = 'number'
                 value={values.mobile}
                 onChange={handleInputChange}
                 />   
            </Grid>
        </Grid>
        <PageHeader
      title =" Family Details:  "
      subTitle="   "
      // icon ={<PeopleOutlineIcon/>}
      />
        <Grid container>
            <Grid item xs ={6}>
            <TextField required
                 variant = "outlined"
                 label="Father Name"
                 name="fatherName"
                 type = 'text'
                 value={values.fatherName}
                 onChange={handleInputChange}
                 />

                <TextField required
                 variant = "outlined"
                 label="Phone Number"
                 name="parentMobile"
                 type = 'number'
                 value={values.parentMobile}
                 onChange={handleInputChange}
                 />   
            </Grid>

            <Grid item xs ={6}>
            <TextField autoComplete ="off" required
                 variant = "outlined"
                 label="Mother Name"
                 name="motherName"
                 type = 'text'
                 value={values.motherName}
                 onChange ={handleInputChange}
                 />

                 <TextField required
                 variant = "outlined"
                 label="Address"
                 name="address"
                 type = 'text'
                 value={values.addrress}
                 onChange={handleInputChange}
                 /> 
            </Grid>

        </Grid>
        <UploadButtons onSubmit={onSubmit}/>
        </form>
    
      </Paper>
    
    )
} 