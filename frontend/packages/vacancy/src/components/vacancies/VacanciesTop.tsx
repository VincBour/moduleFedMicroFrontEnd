import React from 'react';
import { Grid } from "@material-ui/core";
import { getVacanciesTop } from '../../store/actions';
import { useVacancyDispatch, useVacancyState } from '../../store/vacancyProvider';
import VacancyCard from '../vacancyCard/VacancyCard';


export const VacanciesTop = () => {
    const { vacanciesTop } = useVacancyState();
    const dispatch = useVacancyDispatch();
    
    React.useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        await getVacanciesTop(dispatch);
    }
    return (
        <Grid container style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}} spacing={3}>
            {vacanciesTop.map((vacancy, index) => {
                return (
                    <Grid item key={index}>
                        <VacancyCard title={vacancy.title} type={vacancy.offerCategory} location={vacancy.localisation} reference={vacancy.reference}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default VacanciesTop;