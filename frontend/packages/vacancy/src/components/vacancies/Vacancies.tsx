import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";
import { getVacancies } from '../../store/actions';
import { useVacancyDispatch, useVacancyState } from '../../store/vacancyContextProvider';
import VacancyCard from '../vacancyCard/VacancyCard';
import VacancySearch from '../Search/VacancySearch';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent:'center', 
        marginTop: '16px'
    },
    itemSearch: {
        padding:'32px 32px 0 32px'
    }
}))


export const Vacancies = () => {
    const { vacancies } = useVacancyState();
    const dispatch = useVacancyDispatch();
    const classes = useStyles();
   
    React.useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        await getVacancies(dispatch);
    }
    return (
        <Grid container className={classes.container} spacing={3} data-testid='container-vacancies'>
            <Grid item className={classes.itemSearch} data-testid='item-search'>
                <VacancySearch />
            </Grid>
            {vacancies.map((vacancy, index) => 
                (
                    <Grid item key={index} data-testid={`item-${index}`}>
                        <VacancyCard 
                            title={vacancy.title} 
                            type={vacancy.offerCategory} 
                            location={vacancy.localisation} 
                            reference={vacancy.reference}
                        />
                    </Grid>
                )
            )}
        </Grid>
    )
}

export default Vacancies;