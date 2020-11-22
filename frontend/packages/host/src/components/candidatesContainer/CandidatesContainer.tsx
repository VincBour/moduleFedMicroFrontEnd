import * as React from 'react';
import "../../candidates-mf-decl.d";
import { ErrorBoundary } from '../../utils/ErrorBoundary/ErrorBoundary';
const ContainerCandidates = React.lazy(() => import('tscandidates-mf/ContainerCandidates'));

const CandidatesContainer: React.FC = ({children}) => {
    
return (
    <>
    <ErrorBoundary>
        <React.Suspense fallback='Loading Candidates Container'>
            <ContainerCandidates >
                {children}
            </ContainerCandidates>
        </React.Suspense>
    </ErrorBoundary>
    </>
)}

export default CandidatesContainer;