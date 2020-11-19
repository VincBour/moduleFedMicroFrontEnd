import React from "react";
import { Switch, Route} from 'react-router-dom';
import { Description } from "../description/Description";
import NotFound from "../NotFound";
import routes from "../../router/routes";

export const CandidatesRoutes = () => (
    <Switch>
        <Route exact path="/">
            <Description/>
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
        <Route path='*'>
            <NotFound />
        </Route>
    </Switch>
);

export default CandidatesRoutes;