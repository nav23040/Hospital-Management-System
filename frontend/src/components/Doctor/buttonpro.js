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
        label: 'Mobile Number',
         field: 'num',
    },
    {
        label: 'Email',
         field: 'mail',
    },
    {
        label: 'Appointment Date',
         field: 'Date',
    },
    {
        label: 'Appointment TIme',
         field: 'Time',
    },
    {
      label: 'Action',
      field: 'Action',
    },
    {
      label: 'Add Prescription',
      field: 'Add ',
    },
  ];

  const rows_regular_btn = [
    {
      'Name':'Rasanpreet',
      'Age': '22',
      'Gender': 'Male',
      'num' : '8053768745',
      'mail' : 'nikhil@xyz.com',
      'Date' : '23-04-2021',
      'Time' : '12-00 PM',
      'Action':  <Button variant="contained" color="primary">
      Confirmed
    </Button>,
    'Add ': <Button variant="contained" color="lightprimary"onClick = {() => props.onRouteChange22('diagnosis')}>
    Add
  </Button>,

    },
    {
      'first': 'Dilpreet',
      'Age': '23',
      'Gender': 'Male',
      'num' : '8053768745',
      'mail' : 'nikhil@xyz.com',
      'Date' : '23-04-2021',
      'Time' : '12-00 PM',
      'Action': <Button variant="contained" color="primary">
      Confirmed
    </Button>,
    'Add ': <Button variant="contained" color="lightprimary"onClick = {() => props.onRouteChange('diagnosis')}>
    Add
  </Button>,
    },
    {

      'first': 'Ballu',
      'Age': '34',
      'Gender': 'Male',
      'num' : '8053768745',
      'mail' : 'nikhil@xyz.com',
      'Date' : '23-04-2021',
      'Time' : '12-00 PM',
      'Action':<Button variant="contained" color="primary">
      COnfirmed
    </Button>,
  'Add ': <Button variant="contained" color="lightprimary" onClick = {() => props.onRouteChange('diagnosis')}>
    Add
  </Button>,
    }
  ];

  return(
    <MDBTable btn >
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_regular_btn} />
    </MDBTable>
  );
};

export default TablePage;