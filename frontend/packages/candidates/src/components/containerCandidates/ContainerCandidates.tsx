import React from 'react';
import { CandidatesProvider, CandidatesStateType } from '../../store/candidatesProvider';

export const initialState: CandidatesStateType = {
    error: ''
  }
  
export const ContainerVacancy = () => {
   return( <div>
        <h1>CANDIDATES CONTAINER</h1>
        <CandidatesProvider initialState={initialState}>
            
        </CandidatesProvider>
    </div>)
}

export default ContainerVacancy;