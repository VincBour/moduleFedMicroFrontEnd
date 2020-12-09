import React from 'react';
import { initialState } from '../../store/initialState';
import { VacancyContextProvider } from '../../store/vacancyContextProvider';
  
export const VacancyContainer: React.FC = ({children}: {children: React.ReactNode}) => (
        <VacancyContextProvider initialState={initialState}>
            {children}
        </VacancyContextProvider>
    )

export default VacancyContainer;