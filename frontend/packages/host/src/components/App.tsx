import React from "react";
import ReactDOM from "react-dom";
import ContainerHost from "./containerHost/ContainerHost";
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@material-ui/core";
import VacancyContainer from "./vacancyContainer/VacancyContainer";
import Copyright from "./copyright/Copyright";
import CandidatesContainer from "./candidatesContainer/CandidatesContainer";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const AppHost = () => (
    <>
        <HashRouter>
            <CandidatesContainer>
            <VacancyContainer>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ContainerHost />
                    <Copyright />
                </ThemeProvider>
            </VacancyContainer>
            </CandidatesContainer>
        </HashRouter>
    </>

);


ReactDOM.render(<AppHost />, document.getElementById("root"))