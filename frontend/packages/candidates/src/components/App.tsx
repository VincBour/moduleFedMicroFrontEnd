import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import CandidatesContainer from "./containerCandidates/ContainerCandidates";
import CandidatesRoutes from './candidatesRoute/CandidatesRoutes';


const App = () => (
    <CandidatesContainer>
        <HashRouter hashType="noslash">
            <CssBaseline/>
            <CandidatesRoutes />
        </HashRouter>
    </CandidatesContainer>
)


ReactDOM.render(<App />, document.getElementById("root"));