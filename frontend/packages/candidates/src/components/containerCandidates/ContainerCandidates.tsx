import React from 'react';
import { UserSessionManager } from '../../services/userSessionManager';
import { CandidatesProvider, CandidatesStateType } from '../../store/candidatesProvider';

export const initialState: CandidatesStateType = {
    authentication: {
        error: '',
        loading: false,
        isRequestSend: false,
    },
    error: '',
    session: UserSessionManager()
  }
  
export const ContainerCandidates = ({children}) => {
    return( 
        <div>
            <CandidatesProvider initialState={initialState}>
                {children}
            </CandidatesProvider>
        </div>
    )
}

export default ContainerCandidates;