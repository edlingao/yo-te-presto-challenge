import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './views/Home';

export default function Routes() {
  const [user, setUser] = useState('HOLA');
  const handleLogin = (e) => {
    e.preventDefault();
    setUser('HOLA MUNDO');
  };
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
        >
          <Home user={user} handleLogin={handleLogin} />
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
