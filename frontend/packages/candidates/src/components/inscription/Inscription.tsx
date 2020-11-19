import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { useStyles } from './style';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export const Inscription = () => {
    const history = useHistory();
    const classes = useStyles();
    const handleClick = () => {
        history.push('/')
    }
    return (
    <Grid container component='main' className={classes.root}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">S'inscrire</Typography>
                <Typography component='p' variant='body1' align='justify'>
                    Si vous n'avez pas encore votre espace candidat, connectez vous via le bloc ci-dessous.
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleClick}
                >
                  Je me crée un espace candidat
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to='/signin'>
                      {"J'ai déjà un compte, je me connecte"}
                    </Link>
                  </Grid>
                </Grid>
                </form>
            </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
)}

export default Inscription;