import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import Appointments from './appointment';
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
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                  <div className="mt-3">
                    <h4>{name}</h4>
                    <div className='button1' style={{padding: '20px', marginRight:150}}>
                    <button className="btn btn-primary" style={{height: 40, width: 165}} onClick = {() => props.onRouteChange('patientdetailbypatient')}>User Profile</button>
                    </div>
                   <div className='button2' style={{marginRight:150}}>
                   <button className="btn btn-primary" style={{height: 40, width: 165}}>Previous Reports</button>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <Appointments appoint={props.appoint}/>
              </div>

            </div>
            <div className="row gutters-sm">
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                <div className="card-body" style = {{display: "flex",justifyContent: "center",alignItems: "center" }}>
                  <div className="button3" style={{padding: '20px', marginRight:150}}>
                  <button className="btn btn-primary" style={{height: 50, width: 200}} onClick = { () => props.onRouteChange('BookAppointment')}  >Book Appointment</button>
                  </div>
                
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                <div className="card-body" style = {{display: "flex",justifyContent: "center",alignItems: "center" }}>
                  <div className="button3" style={{padding: '20px', marginRight:150}}>
                  <button className="btn btn-primary" style={{height: 50, width: 200}} onClick = {() => props.onRouteChange('BookRoom')} >Book Room</button>
                  </div>
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
