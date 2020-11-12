import React from 'react'
import "../../../candidates-mf-decl.d";
import SuspenceContainer from '../../suspenceContainer/SuspenceContainer';

const CandidatesDescription = React.lazy(() => import('tscandidates-mf/Description'));

export const Description = () => {
return (
    <SuspenceContainer fallback="Candidates Description Loading">
        <CandidatesDescription/>
    </SuspenceContainer>
)
}