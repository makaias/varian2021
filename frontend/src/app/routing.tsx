import React, {ReactElement} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import {useAuthBackend} from '../context/AuthBackend';
import LoginWall from '../components/login/LoginWall';
import AtiGrafikontTesztel from '../pages/dashboard';
import Dashboard from '../pages/dashboard';
import Symptoms from '../pages/Symptoms';

const routesNotRequiringLogin = [<Route exact path="/" component={Home} />, <Route exact path="/articles" component={() => <p>Articles page</p>} />];

const routesRequiringLogin = [
  <Route exact path="/me" component={() => <p>User profile page</p>} />,
  <Route exact path="/exampleNeedsLogin" component={() => <p>exampleNeedsLogin</p>} />,
  <Route exact path="/dashboard" component={Dashboard} />,
  <Route exact path="/symptoms" component={Symptoms} />,
];

export default function Routing(): ReactElement {
  const authBackend = useAuthBackend();

  return (
    <Switch>
      <Route exact path="/" component={Home} />

      {authBackend.isLoggedIn && routesRequiringLogin}
      {routesNotRequiringLogin}

      {!authBackend.isLoggedIn && <LoginWall />}
      <Route component={() => <p>Not found</p>} />
    </Switch>
  );
}
