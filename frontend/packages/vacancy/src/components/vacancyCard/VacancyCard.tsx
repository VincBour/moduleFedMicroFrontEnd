import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/icons8-services-100.png';
import { useStyle } from './style';
import { VacancyCardType } from './types';


export const VacancyCard: React.FC<VacancyCardType> = (props) => {
    const {type, title, location, reference} = props;
    const classes = useStyle();
    const history = useHistory();
    const handleClick = () => {
        history.push(`/vacancy/${reference}`)
    }
    return(
            <Paper elevation={6} className={classes.paper}>
                <div className={classes.containerImage}>
                    <img src={logo} className={classes.image}/> 
                </div>
                <div className={classes.containerInfo}>
                    <Typography component='h5' variant='h5' color='error'>{type}</Typography>
                    <Typography component='h4' variant='h4'>{title}</Typography>
                    <Typography component='h6' variant='h6' color='textSecondary'>{location}</Typography>
                </div>
                <Button className={classes.button} variant='contained' color="primary"
                    onClick={handleClick}
                >
                    <Typography>Voir</Typography>
                </Button>
            </Paper>
    );
};

export default VacancyCard;