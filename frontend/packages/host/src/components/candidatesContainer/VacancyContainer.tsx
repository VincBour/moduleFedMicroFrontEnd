import * as React from 'react';
import "../../vacancy-mf-decl.d";
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

const ContainerCandidates = React.lazy(() => import('tscandidates-mf/ContainerCandidates'));

const CandidatesContainer: React.FC = () => (
    <ErrorBoundary>
        <React.Suspense fallback='Loading VacancyContainer'>
            <ContainerCandidates />
        </React.Suspense>
    </ErrorBoundary>
)

export default CandidatesContainer;