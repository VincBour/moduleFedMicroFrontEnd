import React from 'react';
import { VacancyProvider, VacancyStateType } from '../../store/vacancyProvider';
import Search from '../Search/Search';

export const initialState: VacancyStateType = {
    referential: {
        contracts: [],
        pays: [],
        specialite: []
    },
    error: ''
  }
  
export const ContainerVacancy = () => {
   return( <div>
        <h1>VACANCY CONTAINER</h1>
        <VacancyProvider initialState={initialState}>
            <Search />
        </VacancyProvider>
    </div>)
}

export default ContainerVacancy;