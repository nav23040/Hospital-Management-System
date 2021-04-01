import { React } from "react";
import  Patientform  from "./patientform";
import PageHeader from "./PageHeader"
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))

export default function Patient(){
    const classes =useStyles();
    return(
    <>
        
      <Paper className = {classes.pageContent}>
      <PageHeader
      title =" PATIENT REGISTRATION FORM  :"
      subTitle=" (All the fields marked with (*) are mandatory)  "
      
      />
      <PageHeader
      title ="Patient Details:"
      subTitle=""
     
      />
      <Patientform/>
     
      
      </Paper>

        </>
    )
} 