import React from "react";
import { Switch, Route, Router} from 'react-router-dom';
import { Description } from "../description/Description";
import SignIn from "../signIn/SignIn";
import Inscription from "../inscription/Inscription";

export const CandidatesRoutes = () => (
    <Switch>
        <Route exact path="/">
            <Description/>
        </Route>
        <Route path="/signin">
            <SignIn/>
        </Route>
        <Route path="/signup">
            <Inscription />
        </Route>
    </Switch>
);

export default CandidatesRoutes;