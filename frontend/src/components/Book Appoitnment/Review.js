import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Dr. ', desc: 'RasanPreet Singh', price: 'Neuro Surgeon' },
//   { name: 'Patient', desc: 'Nikhil', price: '20 years' },
//   { name: 'Date', desc: '1st April 2020', },
//   { name: 'Time', desc: '11AM' },
];

const payments = [
  { name: 'Name', detail: 'Nikhil' },
  { name: 'Gender', detail: 'Male' },
  { name: 'Age', detail: '20' },
//   { name: '', detail: '04/2024' },
];
const time = [
    { name: 'Date', detail: '1 April 2021' },
    { name: 'Day', detail: 'Sunday' },
    { name: 'Time', detail: '11:00 AM' },
  //   { name: '', detail: '04/2024' },
  ];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        {/* <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem> */}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom className={classes.title}>
            Patient Details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          
        <Typography variant="h6" gutterBottom className={classes.title}>
            Appointment Time
          </Typography>
           <Grid container>
            {time.map((time) => (
              <React.Fragment key={time.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{time.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{time.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}