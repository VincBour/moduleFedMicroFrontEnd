import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import { Typography } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

type MySpaceProps = RouteComponentProps;

export  const MySpace: React.FC<MySpaceProps> = () =>   {
  const classes = useStyles();

  return (
    <Grid container component="main" style={{height: '100px'}}>
      <Typography>My Space</Typography>
    </Grid>
  )
}

export default MySpace;