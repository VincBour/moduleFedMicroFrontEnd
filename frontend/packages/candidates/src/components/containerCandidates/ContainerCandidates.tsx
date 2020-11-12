import React from 'react';
import { CandidatesProvider, CandidatesStateType } from '../../store/candidatesProvider';
import { Description } from '../description/Description';

export const initialState: CandidatesStateType = {
    error: ''
  }
  
export const ContainerVacancy = ({children}) => {
   return( <div>
        <h1>CANDIDATES CONTAINER</h1>
        <CandidatesProvider initialState={initialState}>
            {children}
        </CandidatesProvider>
    </div>)
}

export default ContainerVacancy;