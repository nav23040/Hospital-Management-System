import React, { Component, useState } from 'react';
import Carrd from './carddd'
import Doc from './button'
import Doc2 from './buttonpro';
import Diagnosis from './diagnosis';
import Grid from '@material-ui/core/Grid';
// import PatientReport from './userprofile'


function App (props) {
  const[route,setRoute]=useState('pendings');

  function onRouteChange22(route) {
		setRoute(route);
  }
 
  if(route==='pendings'){
    return (
      <div >
          <Grid container spacing={100}>
              <Grid>  
         <div className="card" style={{marginLeft:"20%",marginTop:"25%",marginBottom:"20%"}}>
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                  <div className="mt-3">
                    <h4>Dr. Naveen Yadav</h4>
                    {/* <p className="text-secondary mb-1"></p> */}
                    
                  </div>
                </div>
              </div>
            </div>
            </Grid>
                <Grid style={{marginLeft:"10%",marginTop:"4%"}} >
                    <Carrd onRouteChange22 ={onRouteChange22} route={route} />
                </Grid>
          
          
         </Grid>
         <div>
            
             <Doc />
         </div>
      </div>
    );

  }

  else if(route==='bookappointment')
  {
    return(
      <div >
          <Grid container spacing={100}>
              <Grid>  
         <div className="card" style={{marginLeft:"20%",marginTop:"25%",marginBottom:"10%"}}>
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                  <div className="mt-3">
                    <h4>Dr. Naveen Yadav</h4>
                    {/* <p className="text-secondary mb-1"></p> */}
                    
                  </div>
                </div>
              </div>
            </div>
            </Grid>
                <Grid style={{marginLeft:"10%",marginTop:"4%"}} >
                    <Carrd onRouteChange22 ={onRouteChange22} route={route} />
                </Grid>
          
         </Grid>
         <div>
             <Doc2 onRouteChange22={onRouteChange22}/>
             
         </div>
      </div>
    );
  }

  else if(route === 'diagnosis'){
    return(
        <Diagnosis  onRouteChange22={onRouteChange22}/>
    );
  }
 

  
}

export default App;