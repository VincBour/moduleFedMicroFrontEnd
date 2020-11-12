import React from 'react'
import "../../../candidates-mf-decl.d";
import SuspenceContainer from '../../suspenceContainer/SuspenceContainer';

const CandidatesSignIn = React.lazy(() => import('tscandidates-mf/SignIn'));

export const SignInCandidates = () => {
return (
    <SuspenceContainer fallback="Candidates SignIn Loading">
        <CandidatesSignIn/>
    </SuspenceContainer>
)
}

export default SignInCandidates;