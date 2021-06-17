import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './views/Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          {/* <About /> */}
        </Route>
        <Route path="/dashboard">
          {/* <Dashboard /> */}
        </Route>
      </Switch>
    </Router>
  );
}
