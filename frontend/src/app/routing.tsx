import React, {ReactElement} from 'react';
import {Route, Switch, useParams} from 'react-router-dom';
import LoginWall from '../components/login/LoginWall';
import {useAuthBackend} from '../context/AuthBackend';
import Articles from '../pages/article/ArticleList';
import OneArticle from '../pages/article/OneArticle';
import AtiGrafikontTesztel from '../pages/AtiGrafikontTesztel';
import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';

const routesNotRequiringLogin = [
  <Route exact path="/" component={Home} />,
  <Route exact path="/articles" component={Articles} />,
  <Route exact path="/login" component={Login} />,
  <Route
    exact
    path="/articles/:id"
    component={() => {
      const {id} = useParams<{id}>();
      return <OneArticle id={id} />;
    }}
  />,
];

const routesRequiringLogin = [
  <Route exact path="/me" component={() => <p>User profile page</p>} />,
  <Route exact path="/exampleNeedsLogin" component={() => <p>exampleNeedsLogin</p>} />,
  <Route exact path="/ati" component={AtiGrafikontTesztel} />,
  <Route exact path="/user" component={User} />,
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
