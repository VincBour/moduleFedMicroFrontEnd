import React from 'react';
import { Body } from './body/Body';
import Navigation from './navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import SignInCandidates from '../candidatesContainer/signInCandidates/SignInCandidates';
import SignUpCandidates from '../candidatesContainer/signUpCandidates/SignUpCandidates';

export const ContainerHost = () => {
   return(
        <>
          <Navigation />
          <Switch>
            <Route exact path='/'>
              <Body />
            </Route>            
            <Route exact path='/signin'>
              <SignInCandidates />
            </Route>            
            <Route exact path='/signup'>
              <SignUpCandidates />
            </Route>         
          </Switch> 
          
        </>
    )
}

export default ContainerHost;