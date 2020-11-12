import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Description } from '../../candidatesContainer/description/Description';
import { VacancyContainer } from '../../vacancyContainer/VacancyContainer';
const useStyle= makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}))

export const Body: React.FC = () => {
    const classes = useStyle();
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer}/>
        <Container maxWidth='lg' className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
Presentation
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}> 
                        <VacancyContainer />          
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Description /> 
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        </main>
    )
}