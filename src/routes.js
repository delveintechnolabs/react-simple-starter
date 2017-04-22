import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/skeleton';
import Docs from './components/docs';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

import { initializeApp } from './actions';

export default (store) => {
  store.dispatch(initializeApp());
  const authCheck = (nextState, replace, callback) => {
    /* Do some sort of auth check on each route enter */
    /* NOTE: Transition to next state wont happen unless you call the callback function */
    console.log('In authCheck');
    callback();
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="docs" component={Docs} />
      {/*<Route path="/docs" component={Docs} onEnter={authCheck} />*/}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Route>
  );
}