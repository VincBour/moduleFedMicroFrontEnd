import React from "react";
import { Switch, Route } from "react-router-dom";
import { Description } from "../description/Description";
import routes from "../../router/routes";
import ProtectedRoute from "../../shared/ProtectedRoutes/protectedRoute";
import { Navigation } from "../navigation/Navigation";
import protectedRoutes from "../../router/protectedRoutes";
import { useCandidatesState } from "../../context/CandidatesProvider";
import NotFound from "../../shared/NotFound/NotFound";

export const CandidatesRoutes = () => {
  const [token, setToken] = React.useState(null)
  const { authentication, session } = useCandidatesState();
  React.useEffect(()=> {
    setToken(session.getToken());
  }, [authentication.loading])
  
  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <Description />
      </Route>
      {routes.map((route, i) => (
        <Route
          exact
          path={route.path}
          key={i}
          render={(props) => <route.component {...props} />}
        />
      ))}
      {protectedRoutes.map((protectedRoute, index) => {
        return (
          <ProtectedRoute
            key={index}
            path={protectedRoute.path}
            component={protectedRoute.component}
            isAuthenticated={token === null ? false : true}
          />
        );
      })}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
    </>
  );
};

export default CandidatesRoutes;
