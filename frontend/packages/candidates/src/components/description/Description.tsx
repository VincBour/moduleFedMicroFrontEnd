import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from 'react-router-dom';

const useStyles= makeStyles((theme)=>({
    root:{
        
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
}))

export const Description = () => {
    const history = useHistory();
    const classes = useStyles();
    const handleClick = () => {
        history.push('/signin')
    }
    return(
    <Grid container component='main' className={classes.root}>
        <Grid item xs={false} sm={4} md={5} className={classes.image} />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Typography component="h1" variant='h3'>Mon espace candidat</Typography>
                <Typography component='p' variant='body1'>
                    Votre espace candidat vous permet de poster votre CV en ligne et de le rendre consultable par notre service recrutement. Il vous offre également la possibilité de postuler plus rapidement à nos offres d'emploi ou de créer votre alerte de recherche.
                </Typography>
                <Button
                    fullWidth
                    variant='contained'
                    color="primary"
                    onClick={handleClick}
                >
                    Je me connecte
                </Button>
            </div>
        </Grid>
        
    </Grid>
)}

export default Description;