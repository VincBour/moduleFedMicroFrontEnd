import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';


export  const MySpace = () =>   {
  const classes = useStyles();

  return (
    <Grid container component="main" style={{height: '100px'}}>
    </Grid>
  )
}

export default MySpace;