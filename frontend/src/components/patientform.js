import { FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField } from "@material-ui/core";
import { React,useState,useEffect } from "react";
import PageHeader from './PageHeader';
import UploadButtons from './submitbutton'

const useStyles = makeStyles(theme => ({
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
    addrress:'',
    gender:'male',
    fatherName:'',
    motherName:'',
    parentAddress:'',
    parentMobile:'',
  
}


export default function Patientform(){
    
    const[values,setvalues]=useState(initialFValues);
    const classes = useStyles();
    const handleInputChange = e =>{
        const{ name,value} =e.target
        setvalues({
            ...values,
            [name]:value
        })
    }
    return(
    <form className = {classes.root}>
      
        <Grid container>
            <Grid item xs ={6}>
            <TextField required
                 variant = "outlined"
                 label="Full Name"
                 name="fullName"
                 value={values.fullName}
                 onChange={handleInputChange}
                 />
                 
            </Grid>
            <Grid item xs ={6}>
                <FormLabel required>Gender</FormLabel>
                <RadioGroup row>
                    <FormControlLabel value= "male"  control = {<Radio/>} label="Male"/>
                    <FormControlLabel value= "female" control = {<Radio/>} label="Female"/>
                    <FormControlLabel value= "others" control = {<Radio/>} label="Others"/>
                </RadioGroup>
            </Grid>
            <Grid item xs ={6}>

                  <TextField required
                  variant="outlined"
                  label="Date of Birth"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }    }
                   />
            </Grid>
            <Grid item xs ={6}   >
            <TextField required
                 variant = "outlined"
                 label="Phone Number"
                 name="mobile"
                 value={values.mobile}
                 onChange={handleInputChange}
                 />
            </Grid>
            <Grid item xs ={6}   >
            <TextField required
                 variant = "outlined"
                 label="Address"
                 name="address"
                 value={values.addrress}
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
                 value={values.fatherName}
                 onChange={handleInputChange}
                 />
                 
            </Grid>
            
            <Grid item xs ={6}>
            <TextField autoComplete ="off" required
                 variant = "outlined"
                 label="Mother Name"
                 name="motherName"
                 value={values.motherName}
                 onChange ={handleInputChange}
                 />
            </Grid>
            <Grid item xs ={6}   >
            <TextField required
                 variant = "outlined"
                 label="Phone Number"
                 name="parentMobile"
                 value={values.parentMobile}
                 onChange={handleInputChange}
                 />
            </Grid>
            <Grid item xs ={6}   >
            <TextField required
                 variant = "outlined"
                 label="Address"
                 name="parentAddress"
                 value={values.parentAddrress}
                 onChange={handleInputChange}
                 />
            </Grid>
        </Grid>
    
     <UploadButtons/>
    </form>
    

    
    )
}