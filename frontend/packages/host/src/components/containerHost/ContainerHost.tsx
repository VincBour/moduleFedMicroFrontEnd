import React from 'react';
import { Body } from './body/Body';
import Navigation from './navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import '../../vacancy-mf-decl.d';
import '../../candidates-mf-decl.d';
import routesVacancy from 'tsvacancy-mf/Routes';
import routesCandidate from 'tscandidates-mf/Routes';
import NotFound from '../notFound/NotFound';

export const ContainerHost = () => {
   return(
        <>
          <Navigation />
          <Switch>
            <Route exact path='/'>
              <Body />
            </Route>            
            {routesCandidate.map((route, i)=> (
                    <Route
                        exact
                        path={route.path}
                        render={props => (
                            <route.component {...props} />
                        )}
                        key={i}
                    />
            )) }
            {routesVacancy.map((route, i)=> (
                    <Route
                        exact
                        path={route.path}
                        render={props => (
                            <route.component {...props} />
                        )}
                        key={i}
                    />
            )) }
            <Route path='*'>
              <NotFound />
            </Route>  
          </Switch> 
          
        </>
    )
}

export default ContainerHost;