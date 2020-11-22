import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import { useHistory, useLocation } from "react-router-dom";
import { userType } from "../../types/userType";
import { useCandidatesDispatch } from "../../store/candidatesProvider";
import { getLogin } from "../../store/actions";
import useCandidatesState from "../../store/useCandidatesState";

export const SignIn = () => {
  const classes = useStyles();

  const { authentication, session } = useCandidatesState();
  const dispatch = useCandidatesDispatch();

  let history = useHistory();
  let location = useLocation();

  const [user, setUser] = React.useState<userType>({} as userType);

  let { from } = location.state || {from:{pathname:"/"}} as any;

  const handleClick = async () => {
    const userLog = await getLogin(dispatch, user);
    console.log('user', userLog, from);
    session.setUserSession(userLog.token, userLog);
    history.replace(from);
  };
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <Typography component="p" variant="body1" align="justify">
            Pour vous connecter, c'est simple, il vous suffit d'entrer vos
            identifiants dans le bloc ci-dessous.
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
              onChange={event => setUser({...user, email: event.target.value})}
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
              onChange={event => setUser({...user, password: event.target.value})}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {authentication.error && 
              <>
                  <small style={{color:'red'}}>{authentication.error}</small>
              </>

            }
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Connexion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup">{"Je n'ai pas de compte? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
