import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

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
  var token = sessionStorage.getItem('jwtToken');
  const[name, setName] = useState();

  useEffect(() =>{
    fetch('http://localhost:3000/me', {
      method: 'get',
      headers: { 'Content-Type': 'application/json','jwttoken' : token},
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setName(data.name);
        props.onProfileChange(data);
      });
}, []);

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
                    <h4>{name}</h4>
                    <div className='button1' style={{paddingTop: '20px'}}>
                    <button className="btn btn-primary" onClick = {() => props.onRouteChange('patientdetailbypatient')}>User Profile</button>
                    </div>
                   <div className='button2'>
                   <button className="btn btn-primary">Previous Report</button>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                { /*<div className="row">
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
  </div> */}
              </div>

             
            </div>
            <div className="row gutters-sm">
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                <div className="card-body" style = {{display: "flex",justifyContent: "center",alignItems: "center" }}>
                  <div className="button3">
                  <button className="btn btn-primary" onClick = { () => props.onRouteChange('BookAppointment')}  >Book Appointment</button>
                  </div>
                
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body" style = {{display: "flex",justifyContent: "center",alignItems: "center" }}>
                  <button className="btn btn-primary" onClick = {() => props.onRouteChange('BookRoom')} >Book Room</button>
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
