import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import Button from '@material-ui/core/Button';

const TablePage = (props) => {
  
  const columns= [
    
    {
      label: 'Name',
      field: 'Name',
    },
    {
      label: 'Age',
      field: 'Age',
    },
    {
        label: 'Gender',
         field: 'Gender',
    },
    {
        label: 'Room Number Requested',
         field: 'num',
    },
    {
        label: 'No. of days for Room Booked',
         field: 'number',
    },
  
    {
      label: 'Status',
      field: 'Status',
    },
  
  ];

  const rows_regular_btn = [
    {
      'Name':'Rasanpreet',
      'Age': '22',
      'Gender': 'Male',
      'num' : '106',
      'number' : '1',
      
      'Status':  <Button variant="contained" color="lightprimary"onClick = {() => props.onRouteChange22('diagnosis')}>
       confirm
       </Button>,
      

    },
    {
      'first': 'Dilpreet',
      'Age': '23',
      'Gender': 'Male',
      'num' : '106',
      'number' : '5',
      
      'Status': <Button variant="contained" color="lightprimary"onClick = {() => props.onRouteChange22('diagnosis')}>
       confirm
       </Button>,
  
    },
    {

      'first': 'Ballu',
      'Age': '34',
      'Gender': 'Male',
      'num' : '106',
      'number' : '7',
      
      'Status':<Button variant="contained" color="lightprimary"onClick = {() => props.onRouteChange22('diagnosis')}>
       confirm
       </Button>,
      
    }
  ];

  return(
    <div className= "Status" >
      <MDBTable btn >
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_regular_btn} />
    </MDBTable>
    </div>
    
  );
};

export default TablePage;