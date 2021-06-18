import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './views/Home';
import Login from './components/Login';
import MainContainer from './components/MainContainer';
import './scss/main.scss';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
        >
          <Home />
        </Route>
        <Route path="/register">
          <MainContainer>
            <Login register="true" />
          </MainContainer>
        </Route>
        <Route path="/dashboard">
          {/* <Dashboard /> */}
        </Route>
      </Switch>
    </Router>
  );
}
