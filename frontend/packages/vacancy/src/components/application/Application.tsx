import { Button, makeStyles, Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React from 'react';
import { Informations } from './step1/Informations';
import {useHistory, useParams} from 'react-router-dom'
import { Step2 } from './step2/Step2';
import { Step3 } from './step3/Step3';
const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
  
  const steps = ['Informations personnelles', 'Pièces jointes', 'Pourquoi'];
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Informations />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        throw new Error('Unknown step');
    }
  }
  
  export const Application = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    let { ref, title } = useParams();
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
    const history = useHistory();
    const handleClick = () => {
          history.push(`/`)
    }
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Postuler
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Merci d'avoir postulé.
                  </Typography>
                  <Typography variant="subtitle1">
                  Je te confirme que nous avons bien reçu ta candidature pour le poste de {title} et te remercie de ta confiance.
                  </Typography>
                  <Button className={classes.button} onClick={handleClick} variant="contained" color="primary">
                      Home
                  </Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Postuler' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }

  export default Application;