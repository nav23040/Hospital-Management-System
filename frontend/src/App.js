import  React, {useState} from "react";
import './App.css';
import { makeStyles } from "@material-ui/core";
import Header from './components/Header' ;
import Patient from "./components/Registration/patient";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/UserProfile/profile";
import Start from "./components/Book Appoitnment/Checkout";
import BookRoom from "./components/room booking/room";
import Admin from "./components/Admin/admin"
import Data from "./components/Admin/data"
import Docreg from "./components/Registration/doctorregistration";
import Diagnosis from "./components/Doctor/diagnosis";
import Dr from "./components/Doctor/dr"
import PatientHistory from "./components/history2"
import PatientDetails from"./components/UserProfile/userprofile"
const useStyles = makeStyles({
  appMain : {
    width:'100%'
  }
})

function App() {
   const[userdata, setData] = useState([]);
   const[appoint, setAppoint] = useState([]);
   const [route, setRoute] = useState('signin');
   const classes = useStyles();

  function onRouteChange(route) {
		setRoute(route);
  }

  function onProfileChange(data) {
      setData(data);
  }

  function onAppointChange(data){
      setAppoint(data);
  }

  if(route === 'signin' || route === 'adminlogin' || route === 'doctorsignin') {
     return(
      <div className={classes.appMain}>
         <Header onRouteChange={onRouteChange} route ={route}/>
         <SignIn onRouteChange={onRouteChange} route={route} />
        </div> 
     );
  }

 else if(route === 'register') {
    return(
     <div className={classes.appMain}>
        <Header onRouteChange={onRouteChange} route ={route} />
        <Patient onRouteChange={onRouteChange}  />
       </div> 
    );
  }
  else if(route === 'doctorregistration') {
   return(
    <div className={classes.appMain}>
       <Header onRouteChange={onRouteChange} route ={route} />
       <Docreg onRouteChange={onRouteChange}/>
      </div> 
   );
 }
  else if(route === 'patientprofile') {
   return(
    <div className={classes.appMain}>
       <Header onRouteChange={onRouteChange} route ={route}/>
       <Profile onRouteChange={onRouteChange} onProfileChange={onProfileChange} data={userdata} appoint={appoint}/>
      </div> 
    );
   }

   else if(route ==='BookAppointment')
   {
      return(
         <div className={classes.appMain}>
       <Header onRouteChange={onRouteChange} route ={route}/>
       <Start onRouteChange={onRouteChange} onAppointChange={onAppointChange}/>
      </div> 
      );
   }

   else if(route === 'BookRoom'){
      return(
         <div className={classes.appMain}>
            <Header onRouteChange={onRouteChange} route ={route}/>
            <BookRoom onRouteChange={onRouteChange}/>
      </div> 
      );
   }
   else if(route === 'admin'){
      return(
         <div className={classes.appMain}>
            <Header onRouteChange={onRouteChange} route ={route}/>
            <Admin  onRouteChange={onRouteChange}/>
            <Data/>
      </div> 
      );
   }

   else if(route==='patientdetailbypatient')
   {
      return(
         <div className={classes.appMain}>
            <Header onRouteChange={onRouteChange} route ={route}/>
            <PatientDetails onRouteChange={onRouteChange} userdata={userdata}/>
         </div> 
      )
   }
   
   else if(route==='doctorProfile')
   {
      return(
         <div className={classes.appMain}>
            <Header onRouteChange={onRouteChange} route ={route}/>
            <Dr onRouteChange={onRouteChange}/>
         </div> 
      )
   }
   else if(route==='patienthistory')
   {
      return(
         <div className={classes.appMain}>
            <Header onRouteChange={onRouteChange} route ={route}/>
            <PatientHistory onRouteChange={onRouteChange}/>
         </div> 
      )
   }
   else if(route==='patientview')
   {
      return(
         <div className={classes.appMain}>
            <Header onRouteChange={onRouteChange} route ={route}/>
            
         </div> 
      )
   }
   
  
 
   
  
   
 

}

export default App;
