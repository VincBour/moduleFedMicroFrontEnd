import { Button, Card, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/icons8-services-100.png';

const useStyle = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap',
        justifyContent:'space-between',
        height: '150px'
      },
}))

export type VacancyCardType = {
    type: string,
    title: string,
    location: string,
    reference: string,
}

export const VacancyCard: React.FC<VacancyCardType> = ({type, title, location, reference}) => {
    const classes = useStyle();
    const history = useHistory();
    const handleClick = () => {
        history.push(`/vacancy/${reference}`)
    }
    return(
            <Paper elevation={6} className={classes.paper}>
                <div style={{width:"20%", marginLeft:'16px'}}>
                    <img src={logo} style={{height: '100%'}}/> 
                </div>
                <div style={{flexGrow: 2}}>
                    <Typography component='h5' variant='h5' color='error'>{type}</Typography>
                    <Typography component='h4' variant='h4'>{title}</Typography>
                    <Typography component='h6' variant='h6' color='textSecondary'>{location}</Typography>
                </div>
                <Button style={{marginRight:'16px', width:'10%', height:'35%'}} variant='contained' color="primary"
                    onClick={handleClick}
                >
                    <Typography>Voir</Typography>
                </Button>
            </Paper>
    );
};

export default VacancyCard;