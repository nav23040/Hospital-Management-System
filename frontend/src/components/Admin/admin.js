
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 2,
    marginLeft:'20%',
    marginTop:'15%',
    display:'card',

    flexGrow: 1,
    // padding: theme.spacing(2)
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

  <>
   <div>
     <Grid container spacing={24}>
         <Grid>
         <div className="card" style={{marginLeft:"10%",marginTop:"10%"}}>
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                  <div className="mt-3">
                    <h4>ADMIN</h4>
                    {/* <p className="text-secondary mb-1"></p> */}
                    
                  </div>
                </div>
              </div>
            </div>
         </Grid>
      
        <Grid item md={3} >
        <div className="doctor" style={{marginLeft:"3"}} > 
    <Card className={classes.root} style={{backgroundColor:'red'}}>
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Total Doctors
        </Typography>
        <Typography variant="h5" component="h2">
          3
        </Typography>
      </CardContent>
      <CardActions>
     
        <Button size="small" onClick = {() => props.onRouteChange('doctorregistration')}>Add Doctor</Button>
      </CardActions>
    </Card>
    </div>
        </Grid>
        <Grid item md={3}>
        <div className ="patient" style ={{display:"flex"}}>
          <Card className={classes.root}style={ {backgroundColor:"lightblue"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Book Room Requests
        </Typography>
        <Typography variant="h5" component="h2">
          3
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Confirm Requests</Button>
      </CardActions>
    </Card>
    </div>
        </Grid>
        
      </Grid>
    </div>,
      
   
    </>
  );
}