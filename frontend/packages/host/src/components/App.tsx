import React from "react";
import ReactDOM from "react-dom";
import ContainerHost from "./containerHost/ContainerHost";
import { HashRouter } from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";

const AppHost = () => (
    <>
        <HashRouter>
            <CssBaseline />
            <ContainerHost />
        </HashRouter>
    </>

);


ReactDOM.render(<AppHost />, document.getElementById("root"))