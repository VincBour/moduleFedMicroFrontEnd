import * as React from 'react';
import "../../candidates-mf-decl.d";
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
const ContainerCandidates = React.lazy(() => import('tscandidates-mf/ContainerCandidates'));

const CandidatesRoutes = React.lazy(() => import('tscandidates-mf/CandidatesRoutes'))

const Description = React.lazy(() => import('tscandidates-mf/Description'));
const CandidatesContainer: React.FC = () => {
    
return (
    <>
    <ErrorBoundary>
        <React.Suspense fallback='Loading VacancyContainer'>
            <ContainerCandidates />
        </React.Suspense>
    </ErrorBoundary>
    <ErrorBoundary>
        {/* <React.Suspense fallback='Loading Description Candidates'>
            <Description />
        </React.Suspense>     */}
                    <React.Suspense fallback='routes'>
                <CandidatesRoutes />
            </React.Suspense>
    </ErrorBoundary>
    </>
)}

export default CandidatesContainer;