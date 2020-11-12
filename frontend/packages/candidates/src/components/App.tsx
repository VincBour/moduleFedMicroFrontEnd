import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import ContainerCandidates from "./containerCandidates/ContainerCandidates";
import CandidatesRoutes from './router/CandidatesRoutes';

const App = () => (
    <ContainerCandidates>
        <HashRouter hashType="noslash">
            <CssBaseline/>
            <CandidatesRoutes />
        </HashRouter>
    </ContainerCandidates>
)


ReactDOM.render(<App />, document.getElementById("root"));