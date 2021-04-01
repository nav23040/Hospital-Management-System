import  React, {useState} from "react";
import './App.css';
import SideMenu from './components/SideMenu';
import { makeStyles } from "@material-ui/core";
import Header from './components/Header' ;
import Patient from "./components/Registration/patient";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/profile";
import Start from "./components/Book Appoitnment/Start"
import Header1 from "./components/Book Appoitnment/Header1"
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
         <Header onRouteChange={onRouteChange}/>
         <SignIn onRouteChange={onRouteChange}/>
         
        </div> 
     );
  }

  if(route === 'register') {
    return(
     <div className={classes.appMain}>
        <Header onRouteChange={onRouteChange}/>
        <Patient onRouteChange={onRouteChange}/>
       </div> 
    );
  }
  if(route === 'patientprofile') {
   return(
    <div className={classes.appMain}>
       <Header onRouteChange={onRouteChange}/>
       <Profile onRouteChange={onRouteChange}/>
      </div> 
   );
 }
   if(route ==='Start')
   {
      return(
         <div className={classes.appMain}>
       <Header1 onRouteChange={onRouteChange}/>
       <Start onRouteChange={onRouteChange}/>
      </div> 
      );
   }

}

export default App;
