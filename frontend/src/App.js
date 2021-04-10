import  React, {useState} from "react";
import './App.css';
import SideMenu from './components/SideMenu';
import { makeStyles } from "@material-ui/core";
import Header from './components/Header' ;
import Patient from "./components/Registration/patient";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/profile";
import Start from "./components/Book Appoitnment/Start";
import BookRoom from "./components/room booking/room";
import Admin from "./components/Admin/admin"
import Data from "./components/Admin/data"
import Docreg from "./components/Registration/doctorregistration";
const useStyles = makeStyles({
  appMain : {
    width:'100%'
  }
})

function App() {

   const [route, setRoute] = useState('signin');
  const classes = useStyles();

  function onRouteChange(route) {
		setRoute(route);
  }

  if(route === 'signin') {
     return(
      <div className={classes.appMain}>
         <Header onRouteChange={onRouteChange} route ={route}/>
         {/* <Admin/> */}
         <SignIn onRouteChange={onRouteChange}/>
         
        </div> 
     );
  }

 else if(route === 'register') {
    return(
     <div className={classes.appMain}>
        <Header onRouteChange={onRouteChange} route ={route} />
        <Patient onRouteChange={onRouteChange}/>
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
       <Profile onRouteChange={onRouteChange}/>
      </div> 
    );
   }

   else if(route ==='BookAppointment')
   {
      return(
         <div className={classes.appMain}>
       <Header onRouteChange={onRouteChange} route ={route}/>
       <Start onRouteChange={onRouteChange}/>
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

}

export default App;
