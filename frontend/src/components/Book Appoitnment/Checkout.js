import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import DoctorForm from './DateandDoctorForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import Review from './Review';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://localhost:3000/">
        HOSPITAL MANGENMENT 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(23),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: '1000',
      marginRight: 'auto',
      
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Search Doctor', 'Personal Details', 'Review'];

const initialPatientValues={
  name:'',
  age:'',
  gender:'male',
  doctorname: '',
  time: '',
  date: ''

}

export default function Checkout(props) {
  const classes = useStyles();
  const [patient, setPatientData] = React.useState(initialPatientValues);

  const handleInputChange = e =>{
    const{name,value} = e.target
    setPatientData({
        ...patient,
        [name]:value
    })
  } 
  
  const handleDoctorName = e => {
    
    if(e===null){
      setPatientData({
        ...patient,
        doctorname:''
      }) 
    }
      
    else{
    setPatientData({
      ...patient,
      doctorname:e.name
     }) 
    } 
  }

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep === steps.length - 1){
      alert('Your Appointment has been successfully submitted!!!\nWait for the Confirmation');
      props.onAppointChange(patient);
      props.onRouteChange('patientprofile');
      
     /* fetch('http://localhost:3000/bookappointment', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            data: patient
        })
        })
      .then(response => response.json())
      .then(data => {
        })*/
    }
    else
     setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <DoctorForm patient={patient} handleInputChange={handleInputChange} handleDoctorName={handleDoctorName}/>;
      case 1:
        return <PersonalDetailsForm patient={patient} handleInputChange={handleInputChange}/>;
      case 2:
        return <Review name={patient.name} age={patient.age} gender={patient.gender} doctorname={patient.doctorname} date={patient.date} time={patient.time} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main className={classes.layout}>
        <Paper className={classes.paper} style = {{marginLeft:'10px'}}>
          <Typography component="h1" variant="h4" align="center" >
            Book Appointment
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you .
                </Typography>
                <Typography variant="subtitle1">
                  Your Appointment number is #2001539.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Book Appointment' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}