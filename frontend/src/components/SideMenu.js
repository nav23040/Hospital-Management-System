
import React from 'react'
import { makeStyles } from '@material-ui/core'
import {withStyles} from "@material-ui/core";
const useStyles = makeStyles({
    SideMenu:{
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        left:'0px',
        width:'320px',
        height:'100px',
        backgroundColor:'#253053'
    }
})
export default function SideMenu(){
    const classes= useStyles();
    return(
        <div className="side-menu"></div>
    )
}