import  React, {useState} from "react";
import './App.css';
import SideMenu from './components/SideMenu';
import { makeStyles } from "@material-ui/core";
import Header from './components/Header' ;

import Patient from "./components/Registration/patient";
import SignIn from "./components/SignIn/SignIn";


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
 
}

export default App;
