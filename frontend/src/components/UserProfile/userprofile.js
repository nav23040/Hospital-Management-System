import React, {useState} from 'react';
/*import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
*/
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
//import Container from '@material-ui/core/Container';
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


export default function Profile(props) {
  //console.log(props.userdata);
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
                    <h4>{props.userdata.name}</h4>              
                  </div>
                </div>
              </div>
            </div>
            
          </div>
      {  props.route === 'patientdetailbypatient'
          ?
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {props.userdata.name}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.gender}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile Number</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.mobile_number}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.address}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Father's Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.father_name}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mother's Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.mother_name}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Parent's Mobile Number</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.father_phone_number}
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
        <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {props.userdata.name}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">DOB</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.dob}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.gender}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile Number</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.mobile_number}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Registration ID</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.registrationid}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Specialization</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.specialization}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.address}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">State</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {props.userdata.state}
                  </div>
                </div>
          
              </div>
            </div>
          </div>
           }
     </div>
         
          </div>
    </div>
  );
 
}