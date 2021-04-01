import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './profile_style.css';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function profile(props) {
  

  function ChangeRoute(){
     props.onRouteChange('patientprofile');
  };


  return (
  

    <div className="container">
      <div className="main-body">
       
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                  <div className="mt-3">
                    <h4>Dilpreet Singh</h4>
                    {/* <p className="text-secondary mb-1"></p> */}
                    <p className="text-muted font-size-sm">New Delhi</p>
                    <button className="btn btn-primary">View Previous Reports</button>
                    
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Kenneth Valdez
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    fip@jukmuh.al
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    (239) 816-9029
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    (320) 380-4539
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Bay Area, San Francisco, CA
                  </div>
                </div>
              </div>

             
            </div>
            <div className="row gutters-sm">
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                <div className="card-body" style = {{display: "flex",justifyContent: "center",alignItems: "center" }}>
                  <button className="btn btn-primary"  >Book Appointment</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body" style = {{display: "flex",justifyContent: "center",alignItems: "center" }}>
                  <button className="btn btn-primary"  >Book Room</button>
                    {/* <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                    <small>Web Design</small>
                    <div className="progress mb-3" style={{height: '5px'}}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <small>Website Markup</small>
                    <div className="progress mb-3" style={{height: '5px'}}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <small>One Page</small>
                    <div className="progress mb-3" style={{height: '5px'}}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <small>Mobile Template</small>
                    <div className="progress mb-3" style={{height: '5px'}}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <small>Backend API</small>
                    <div className="progress mb-3" style={{height: '5px'}}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
}