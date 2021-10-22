import React, {ReactElement} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import {useAuthBackend} from '../context/AuthBackend';
import LoginWall from '../components/login/LoginWall';

const routesRequiringLogin = [
  <Route exact path='/me' component={() => <p>User profile page</p>} />,
  <Route exact path='/exampleNeedsLogin' component={() => <p>exampleNeedsLogin</p>} />
];

const routesNotRequiringLogin = [
  <Route exact path='/' component={Home} />,
  <Route exact path='/articles' component={() => <p>Articles page</p>} />
];

export default function Routing(): ReactElement {
  const authBackend = useAuthBackend();

  return (
    <Switch>
      {authBackend.isLoggedIn && routesRequiringLogin}
      {routesNotRequiringLogin}

      {!authBackend.isLoggedIn && (
        <LoginWall />
      )}
      <Route component={() => <p>Not found</p>} />
    </Switch>
  );
}
