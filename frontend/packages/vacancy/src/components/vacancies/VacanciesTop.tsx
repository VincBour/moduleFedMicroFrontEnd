import React from 'react';
import { Grid } from "@material-ui/core";
import { getVacanciesTop } from '../../store/actions';
import { useVacancyDispatch, useVacancyState } from '../../store/vacancyContextProvider';
import VacancyCard from '../vacancyCard/VacancyCard';
import { useStyles } from './styles';


export const VacanciesTop: React.FC = () => {
    const classes = useStyles();
    const { vacanciesTop } = useVacancyState();
    const dispatch = useVacancyDispatch();
    
    React.useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        await getVacanciesTop(dispatch);
    }
    return (
        <Grid container className={classes.container} spacing={3} data-testid='grid-vacancies'>
            {vacanciesTop.map((vacancy, index) => 
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

export default VacanciesTop;
