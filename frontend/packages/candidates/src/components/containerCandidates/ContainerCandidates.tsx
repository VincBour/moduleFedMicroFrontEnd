import React from 'react';
import { CandidatesProvider } from '../../context/CandidatesProvider';
import { initialState } from './initialState';


  
export const CandidatesContainer = ({children}: {children: React.ReactNode}) => {
    return( 
        <div>
            <CandidatesProvider initialState={initialState}>
                {children}
            </CandidatesProvider>
        </div>
    )
}

export default CandidatesContainer;