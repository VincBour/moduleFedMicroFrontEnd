import React from "react";
import ReactDOM from "react-dom";
import ContainerVacancy from "./containerVacancy/ContainerVacancy";
import {HashRouter, Route, Switch} from "react-router-dom"; 
import { routes } from "../route/routes";
import { HomeVacancy } from "./home/HomeVacancy";



const App = () => (
    <ContainerVacancy>
        <HashRouter>
            <Switch>
                <Route exact path='/'>
                    <HomeVacancy />
                </Route>
                {routes.map((route, i)=> (
                    <Route
                        exact
                        path={route.path}
                        key={i}
                        render={props => (
                            <route.component {...props} />
                        )}
                    />
                )) }
            </Switch>
        </HashRouter>
    </ContainerVacancy>
)


ReactDOM.render(<App />, document.getElementById("root"))