import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import { getVacancies } from '../../store/actions';
import { useVacancyDispatch, useVacancyState } from '../../store/vacancyProvider';
import VacancyCard from '../vacancyCard/VacancyCard';
import VacancySearch from '../Search/VacancySearch';


export const Vacancies = () => {
    const { vacancies } = useVacancyState();
    const dispatch = useVacancyDispatch();
    
    React.useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        await getVacancies(dispatch);
    }
    return (
        <>
        <Grid container style={{display: 'flex', flexDirection: 'column', justifyContent:'center', marginTop: '16px'}} spacing={3}>
            <Grid item style={{padding:'32px 32px 0 32px'}}>
                <VacancySearch />
            </Grid>
            {vacancies.map((vacancy, index) => {
                return (
                    <Grid item key={index}>
                        <VacancyCard title={vacancy.title} type={vacancy.offerCategory} location={vacancy.localisation} reference={vacancy.reference}/>
                    </Grid>
                )
            })}
        </Grid>
        </>
    )
}

export default Vacancies;