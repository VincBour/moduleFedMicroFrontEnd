import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core"
import React from "react"
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
}))

export const NotFound = () => {
    const history = useHistory();
    const classes = useStyles();
    const handleClick = () => {
        history.push('/')
    }
    return (
        <Grid container className={classes.paper}>
            <Grid item component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Typography component='h1' variant='h1'>404</Typography>
                <Typography component='h2' variant='h2'>UH OH! You're lost.</Typography>
                <Typography component='p' variant='body1'>
                    The page you are looking for does not exist.
                    How you got here is a mystery. But you can click the button below
                    to go back to the homepage.
                </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    <Typography component='h6' variant="h6">HOME</Typography>
                </Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default NotFound;