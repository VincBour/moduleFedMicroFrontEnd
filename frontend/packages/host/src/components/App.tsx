import React from "react";
import ReactDOM from "react-dom";
import ContainerHost from "./containerHost/ContainerHost";
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@material-ui/core";
import VacancyContainer from "./vacancyContainer/VacancyContainer";
import Copyright from "./copyright/Copyright";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const AppHost = () => (
    <>
        <HashRouter>
            <VacancyContainer>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ContainerHost />
                    <Copyright />
                </ThemeProvider>
            </VacancyContainer>
        </HashRouter>
    </>

);


ReactDOM.render(<AppHost />, document.getElementById("root"))