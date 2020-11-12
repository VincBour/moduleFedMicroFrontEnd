import * as React from 'react';
import "../../vacancy-mf-decl.d";
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

const ContainerVacancy = React.lazy(() => import('tsvacancy-mf/ContainerVacancy'));

export const VacancyContainer: React.FC = () => (
   <>
   <ErrorBoundary>
        <React.Suspense fallback='Loading VacancyContainer'>
            <ContainerVacancy />
        </React.Suspense>
    </ErrorBoundary>
</>
)

export default VacancyContainer;