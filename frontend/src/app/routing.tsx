import React, {ReactElement} from 'react';
import {Route, Switch, useParams} from 'react-router-dom';
import LoginWall from '../components/login/LoginWall';
import {useAuthBackend} from '../context/AuthBackend';
import ArticleList from '../pages/article/ArticleList';
import OneArticle from '../pages/article/OneArticle';
import Contact from '../pages/contact/Contact';
import Dashboard from '../pages/dashboard';
import Home from '../pages/Home';
import Inflammatory from '../pages/sympthoms/sympthom/Inflammatory';
import Symptoms from '../pages/Symptoms';
import User from '../pages/User';

const routesNotRequiringLogin = [
  <Route exact path="/" component={Home} />,
  <Route exact path="/articles" component={ArticleList} />,
  <Route
    exact
    path="/articles/:id"
    component={() => {
      const {id} = useParams<{id}>();
      return <OneArticle id={id} />;
    }}
  />,
  <Route exact path="/symptoms/inflammatory" component={Inflammatory} />,
  <Route exact path="/contact" component={Contact} />,
];

const routesRequiringLogin = [
  <Route exact path="/me" component={() => <p>User profile page</p>} />,
  <Route exact path="/exampleNeedsLogin" component={() => <p>exampleNeedsLogin</p>} />,
  <Route exact path="/user" component={User} />,
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
