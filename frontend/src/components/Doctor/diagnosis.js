import { React, useState } from "react";
import PageHeader from "../Registration/PageHeader"
import { makeStyles, Paper } from "@material-ui/core";
import { FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Button } from "@material-ui/core";
import UploadButtons from '../Registration/submitbutton';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Details } from "@material-ui/icons";

const listdisease = [
    { title: 'Fever' },
    { title: 'Cough' },
    { title: 'Cold' },
    { title: 'Corona' },
    { title: 'Diarrhea' },
    {title: 'Diabetes' },
    {title: 'Kidney Stone' },
    {title: 'Heart Disease' },
    {title: 'Liver disease' },
    {title: 'Cancer' },
    {title: 'Allergies and Asthma' },
    {title: 'Scleroderma' },
    {title: 'Relapsing Polychondritis' },
    {title: 'Celiac Disease' },
    

];



const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    root: {
        '& .MuiFormControl-root': {
            width: '60%',
            margin: theme.spacing(1),
            // leftMargin:'100px'
        }
    }
}))


export default function Docreg(props) {
    
    const [values, setvalues] = useState({
        name: props.details.name,
        age: props.details.age,
        gender: props.details.gender,
        disease: '',
        symptoms:'',
        prescription: '',
    });

    const classes = useStyles();
    const handleInputChange = e => {
        const{ name,value} = e.target
        
        setvalues({
            ...values,
            [name]: value
        })
    }
    

    function onSubmit() {
       // props.onRouteChange22('bookappointment');
        console.log(values);

       /* fetch('http://localhost:3000/doctor/diagnosis', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: values
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data === 'success')
                    alert('New Doctor added in the database');
                else if (data === 'patientid already exists')
                    alert('patientid already exists');
                else if (data === 'Registration ID already exists')
                    alert('Registration ID already exists');
                else
                    alert('Error in registering doctor! Please try again');

            })
            */
    }

    
    return (
        <Paper style={{marginTop:"3%",marginLeft:"4"}}>
            <PageHeader
                title=" PATIENT DIAGNOSIS FORM  :"
                subTitle=" (All the fields marked with (*) are mandatory)  "

            />
            <PageHeader
                title="Patient Details:"
                subTitle=""
            />

            <form className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                       <TextField required
                            variant="outlined"
                            label="Patient Name "
                            name="name"
                            type='text'
                            value={values.name}
                            onChange={handleInputChange}
                        />

                        <TextField required
                            variant="outlined"
                            label="Age(in Years)"
                            name='age'
                            type="number"
                            value={values.age}
                            onChange={handleInputChange}
                        />
                      
                      <TextField required
                            variant="outlined"
                            label="Medical prescription "
                            name="prescription"
                            type='text'
                            multiline={true}
                            rows={3}
                            value={values.prescription}
                            onChange={handleInputChange}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel required>Gender</FormLabel>
                        <RadioGroup row value={values.gender} onChange={handleInputChange} >
                            <FormControlLabel value="male" name='gender' control={<Radio />} label="Male" />
                            <FormControlLabel value="female" name='gender' control={<Radio />} label="Female" />
                            <FormControlLabel value="others" name='gender' control={<Radio />} label="Others" />
                        </RadioGroup>

                        <TextField required
                            variant="outlined"
                            label="Symptoms "
                            name="symptoms"
                            type='text'
                            multiline={true}
                            rows={2}
                            value={values.symptoms}
                            onChange={handleInputChange}
                        />

                        <Autocomplete
                            id="disease"
                            options={listdisease}
                            getOptionLabel={(option) => option.title}
                            style={{ width: 500 }}
                            onChange={(event, value) => setvalues({ ...values, patientname: value.title })}
                            renderInput={(params) => <TextField {...params} label=" Disease" variant="outlined" />}
                        />
                    </Grid>
                </Grid>
                <Grid style={{display:'flex',justifyContent:"center", padding: "10px",}}>
                <Button  onClick = {() => props.onRouteChange22('bookappointment')}   >
                 Go Back
                </Button>
                <UploadButtons onSubmit={onSubmit} />
                </Grid>
                
                

            </form>

        </Paper>

    )

}