import React from 'react'
import "../../../candidates-mf-decl.d";
import SuspenceContainer from '../../suspenceContainer/SuspenceContainer';

const CandidatesSignUp = React.lazy(() => import('tscandidates-mf/Inscription'));

export const SignUpCandidates = () => {
return (
    <SuspenceContainer fallback="Candidates SignUp Loading">
        <CandidatesSignUp/>
    </SuspenceContainer>
)
}

export default SignUpCandidates;