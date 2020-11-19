import React from 'react';
import { VacancyProvider, VacancyStateType } from '../../store/vacancyProvider';

export const initialState: VacancyStateType = {
    referential: {
        contracts: [],
        pays: [],
        specialite: []
    },
    vacancies: [],
    vacanciesTop: [],
    error: ''
  }
  
export const ContainerVacancy = ({children}) => (
        <VacancyProvider initialState={initialState}>
            {children}
        </VacancyProvider>
    )

export default ContainerVacancy;