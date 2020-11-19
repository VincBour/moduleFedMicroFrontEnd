import * as React from 'react';
import "../../vacancy-mf-decl.d";
import { ErrorBoundary } from '../../utils/ErrorBoundary/ErrorBoundary';

const ContainerVacancy = React.lazy(() => import('tsvacancy-mf/ContainerVacancy'));

export const VacancyContainer: React.FC = ({children}) => (
   <>
   <ErrorBoundary>
        <React.Suspense fallback='Loading VacancyContainer'>
            <ContainerVacancy>
                {children}
            </ContainerVacancy>
        </React.Suspense>
    </ErrorBoundary>
</>
)

export default VacancyContainer;