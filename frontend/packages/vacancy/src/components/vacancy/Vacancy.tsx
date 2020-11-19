import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, IconButton, makeStyles, Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Reptile from '../../images/contemplative-reptile.jpg';
import { useVacancyState } from "../../store/vacancyProvider";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles({
    media: {
      height: 140,
    },
    divider: {
        marginTop: '8px',
        marginBottom: '8px'
    }
  });

export const Vacancy: React.FC = () => {
    const classes = useStyles();
    const { vacancies, vacanciesTop } = useVacancyState();
    let { ref } = useParams();
    const vacancy = [...vacancies,...vacanciesTop].find(v => v.reference === ref);
    
    const {
        reference,
        contract,
        country,
        localisation,
        creationDate,
        description,
        salaryRange,
        educationLevel,
        experienceLevel,
        title,
    
    } = vacancy;
  const date = new Date(creationDate);
  const dateString = `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`
  const history = useHistory();
  const handleClick = () => {
        history.push(`/vacancy/application/${reference}/${title}`)
  }
  return (
    <Card>
        <CardActionArea>
            <CardMedia 
                className={classes.media}
                image={Reptile}
                title="Contemplative reptile"
            />
            <CardContent>
                <Typography variant='h4' color='primary'>{title}</Typography>
                <Divider className={classes.divider}/>
                <Typography variant='h5' color='secondary'>Description du poste</Typography>
                <Typography variant='h6'>Détail de l'emploi : {contract}</Typography>
                <Typography variant='h6'>{salaryRange}</Typography>
                <Typography variant='body1' align='justify'>{description}</Typography>
                <Typography variant='h6'>Implantation géographique : {localisation} / {country} </Typography>
                <Divider className={classes.divider}/>
                <Typography variant='h5' color='secondary'>Profil </Typography>
                <Typography variant='h6'>Expérience : {experienceLevel}</Typography>
                <Typography variant='h6'>Niveau d'éducation : {educationLevel}</Typography>
                <Divider className={classes.divider}/>
                <Typography variant='h5' color='secondary'>Détails</Typography>
                <Typography variant='h6'>Référence: {reference}</Typography>
                <Typography variant='h6'>Date de publication: {dateString}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button variant='contained' color='primary' onClick={handleClick}>
            Postuler
        </Button>
      </CardActions>
    </Card>);
};

export default Vacancy;
