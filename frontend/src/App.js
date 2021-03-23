import  React  from "react";
import './App.css';
import SideMenu from './components/SideMenu';
import { makeStyles } from "@material-ui/core";
import Header from './components/Header' ;

import Patient from "./components/patient";
import SignIn from "./components/SignIn";


const useStyles = makeStyles({
  appMain : {
    width:'100%'
  }
})
function App() {
  const classes = useStyles();
  return (
    <>
    {/* <SideMenu/> */}
    <div className={classes.appMain}>
      <Header/>
      <SignIn/>
      
      {/* <Patient/> */}
      </div>
    </>
  );
}

export default App;
