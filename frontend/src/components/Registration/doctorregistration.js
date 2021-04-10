import { React, useState} from "react";
import PageHeader from "./PageHeader"
import { makeStyles, Paper } from "@material-ui/core";
import { FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@material-ui/core";
import UploadButtons from './submitbutton';
import Autocomplete from '@material-ui/lab/Autocomplete';
const list = [
    { title: 'Pediatrician' },
    { title: 'Surgeon' },
    { title: 'Psychiatrist' },
    { title: 'Cardiologist' },
    { title: 'Dermatologist' },
    { title: 'Endocrinologist' },
    { title: 'Gastroenterologist' },
    { title: 'Nephrologist' },
    { title: 'Ophthalmologist' },
    { title: 'Otolaryngologist' },
    { title: 'Pulmonologist' },
    { title: 'Neurologist' },
    { title: 'Radiologist' },
    { title: 'Anesthesiologist' },
    { title: 'Oncologist ' },
  
  ];
  const liststate = [ 
{      title:"Andhra Pradesh"},
{title:"Arunachal Pradesh"},
 { title:"Assam"},
 { title:"Bihar"},
  {title:"Chhattisgarh"},
  {title:"Goa"},
  {title:"Gujarat"},
  {title:"Haryana"},
  {title:"Himachal Pradesh"},
  {title:"Jammu and Kashmir"},
  {title:"Jharkhand"},
 { title:"Karnataka"},
  {title:"Kerala"},
 {title: "Madhya Pradesh"},
 {title: "Maharashtra"},
{ title: "Manipur"},
 {title: "Meghalaya"},
{ title: "Mizoram"},
{ title: "Nagaland"},
{ title: "Odisha"},
{ title: "Punjab"},
{ title: "Rajasthan"},
{ title: "Sikkim"},
{ title: "Tamil Nadu"},
{ title: "Telangana"},
{ title: "Tripura"},
{ title: "Uttarakhand"},
{ title: "Uttar Pradesh"},
{ title: "West Bengal"},
{ title: "Andaman and Nicobar Islands"},
{ title: "Chandigarh"},
{ title: "Dadra and Nagar Haveli"},
{  title:"Daman and Diu"},
 { title:"Delhi"},
{  title:"Lakshadweep"},
{  title:"Puducherry"}];
  
  
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
var searchNames = ['Sydney', 'Melbourne', 'Brisbane', 
'Adelaide', 'Perth', 'Hobart'];
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

export default function Docreg(props){

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
        
    //     fetch('http://localhost:3000/register', {
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             name: values.fullName,
    //             email: values.email,
    //             password: values.password,
    //             age: values.age,
    //             gender: values.gender,
    //             mobile: values.mobile,
    //             address: values.address,
    //             fatherName: values.fatherName,
    //             motherName: values.motherName,
    //             parentMobile: values.parentMobile
    //         })
    //     })
    //    .then(response => response.json())
    //    .then(data => {
    //        console.log(data);
    //      if(data === 'success')
    //      props.onRouteChange('signin');
         
    //      else
    //        alert('Invalid');
              
    //    })

    }

    return(  
      <Paper className = {classes.pageContent}>
      <PageHeader
      title =" DOCTOR REGISTRATION FORM  :"
      subTitle=" (All the fields marked with (*) are mandatory)  "
      
      />
      <PageHeader
      title ="Doctor Details:"
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

                {/* <TextField required
                 variant = "outlined"
                 label="specialization"
                 name="specialization"
                 type = 'text'
                 value={values.spez}
                 onChange={handleInputChange}
                 />    */}
                <Autocomplete
                id="specialization"
                options={list}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Specialization" variant="outlined" />}
                />
            </Grid>
        </Grid>
        
        <Grid container>
            <Grid item xs ={6}>
            <TextField required
                 variant = "outlined"
                 label="Consultation Fee"
                 name="cfee"
                 type = 'numer'
                 value={values.cfee}
                 onChange={handleInputChange}
                 />

                <TextField required
                 variant = "outlined"
                 label="Phone Number "
                 name="parentMobile"
                 type = 'number'
                 value={values.parentMobile}
                 onChange={handleInputChange}
                 />   
            </Grid>
            <Grid item xs ={6}>
            {/* <TextField required
                 variant = "outlined"
                 label="State"
                 name="State"
                 type = 'text'
                 value={values.state}
                 onChange={handleInputChange}
                 /> */}
                <  Autocomplete
                id="State"
                options={liststate}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="State" variant="outlined" />}
                />
                <TextField required
                 variant = "outlined"
                 label="City "
                 name="city"
                 type = 'text'
                 value={values.city}
                 onChange={handleInputChange}
                 /> 
                
            
            </Grid>

  

        </Grid>
        <UploadButtons onSubmit={onSubmit}/>
       
        </form>
        
      </Paper>
    
    )
} 