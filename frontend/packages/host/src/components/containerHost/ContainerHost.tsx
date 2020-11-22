import React from "react";
import { Body } from "./body/Body";
import Navigation from "./navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import "../../vacancy-mf-decl.d";
import NotFound from "../notFound/NotFound";
import SuspenceContainer from "../../utils/suspenceContainer/SuspenceContainer";
import "../../candidates-mf-decl.d";

import routesVacancy from "tsvacancy-mf/Routes";
import routesCandidate from 'tscandidates-mf/Routes';
import routesProtectedCandidate from 'tscandidates-mf/ProtectedRoutes';
import useCandidatesState from 'tscandidates-mf/UseCandidatesState';
import CandidatesContainer from "../candidatesContainer/CandidatesContainer";

// const routesVacancy = React.lazy(async () => import('tsvacancy-mf/Routes'));

export type CandidatesStateType = {
  authentication: {
    isRequestSend: boolean;
    error: string;
    loading: boolean;
  };
  error: string;
  session: {
    getUser: () => userLogged | null;
    getToken: () => string;
    removeUserSession: () => void;
    setUserSession: (token: string, user: userLogged) => void;
  };
};

export type userLogged = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export const ContainerHost = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>
        {routesVacancy.map((route, i) => (
          <Route
            exact
            path={route.path}
            render={(props) => <route.component {...props} />}
            key={i}
          />
        ))}
        <SuspenceContainer fallback='routes candidates'>
          <RouteCandidates />
        </SuspenceContainer>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default ContainerHost;

const RouteCandidates = () => {
  const ProtectedRoute = React.lazy(
    () => import("tscandidates-mf/ProtectedRouteService")
  );
  // const routesCandidate = React.lazy(() => import("tscandidates-mf/Routes"));
  // const routesProtectedCandidate = React.lazy(
  //   () => import("tscandidates-mf/ProtectedRoutes")
  // );
  // const useCandidatesState = React.lazy(
  //   () => import("tscandidates-mf/UseCandidatesState")
  // );
  const [token, setToken] = React.useState(null);
  const {
    authentication,
    session,
  } = useCandidatesState();

  React.useEffect(() => {
    setToken(session.getToken());
  }, [authentication.loading]);
  console.log(authentication, token);

  return (
    <>
      {routesCandidate.map((route, i) => (
        <Route
          exact
          path={route.path}
          render={(props) => <route.component {...props} />}
          key={i}
        />
      ))}
      {routesProtectedCandidate.map((route, i) => (
        <ProtectedRoute
          key={i}
          path={route.path}
          component={route.component}
          isAuthenticated={token ? true : false}
        />
      ))}
    </>
  );
};
