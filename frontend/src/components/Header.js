
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {IconButton} from '@material-ui/core';
import './dropdown.css';
import Link from '@material-ui/core/Link';
// import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  function ChangeRoute1(){
    props.onRouteChange('signin');
  }
  function ChangeRoute(){
    props.onRouteChange('register');
 }
 function ChangeRoute2(){
  props.onRouteChange('admin');
}
function ChangeRoute3(){
  props.onRouteChange('doctorregistration');
}

  if(props.route === 'signin' || props.route === 'register'){
      return (
        <div className={classes.root}> 
          <AppBar position="auto">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Hospital Management System
              </Typography>
              <div  class="dropdown" >
              <Button class="dropbtn" >{'Patient'}</Button>
              <div class="dropdown-content">
                <Link href='#' onClick = {ChangeRoute1}>Login</Link>
                <Link  href='#' onClick = {ChangeRoute} >Register</Link>
              </div>
            </div>

            <div class="dropdown" >
              <button class="dropbtn" >Doctor</button>
              <div class="dropdown-content"  >
              <Link href='#' onClick = {ChangeRoute1}>Login</Link>
                <Link  href='#' onClick = {ChangeRoute3} >Register</Link>
                
              </div>
            </div>
            <div class="dropdown" >
            <button class="dropbtn"  onClick ={ChangeRoute2}>Admin Login</button>
            </div>
            <div class="dropdown" >
            <button class="dropbtnmain"  >Contact Us</button>
            </div>
                    </Toolbar>
                  </AppBar>
                </div>
              );
           }
  
  else if (props.route === 'patientprofile'){
    return (
      <div className={classes.root}> 
        <AppBar position="auto">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Hospital Management System
            </Typography>
              <div class="dropdown" >
              <button class="dropbtnmain" onClick = {ChangeRoute1} >Sign Out</button>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  else{
    return (
      <div className={classes.root}> 
        <AppBar position="auto">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Hospital Management System
            </Typography>
              <div class="dropdown" >
              <button class="dropbtnmain" onClick = {() => props.onRouteChange('patientprofile')} >Go Back</button>
              </div>
              <div class="dropdown" >
              <button class="dropbtnmain" onClick = {ChangeRoute1} >Sign Out</button>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );

  }
 }

