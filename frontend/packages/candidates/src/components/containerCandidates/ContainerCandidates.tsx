import React from 'react';
import { CandidatesProvider, CandidatesStateType } from '../../store/candidatesProvider';

export const initialState: CandidatesStateType = {
    error: ''
  }
  
export const ContainerCandidates = ({children}) => {
   return( <div>
        <CandidatesProvider initialState={initialState}>
            {children}
        </CandidatesProvider>
    </div>)
}

export default ContainerCandidates;