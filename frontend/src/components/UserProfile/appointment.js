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
        label: 'Doctor Name',
         field: 'doc',
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
      label: 'Status',
      field: 'Action',
    }
  ];

  const rows_regular_btn = [
    {
      'Name':props.appoint.name,
      'Age': props.appoint.age,
      'Gender': props.appoint.gender,
      'doc': props.appoint.doctorname,
      'Date' : props.appoint.date,
      'Time' : props.appoint.time,
      'Action':  'Confirmed'
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