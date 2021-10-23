import React, {ReactElement} from 'react';
import {Route, Switch, useParams} from 'react-router-dom';
import LoginWall from '../components/login/LoginWall';
import {useAuthBackend} from '../context/AuthBackend';
import {UserType} from '../enum/UserType';
import ArticleList from '../pages/article/ArticleList';
import OneArticle from '../pages/article/OneArticle';
import Contact from '../pages/contact/Contact';
import Dashboard from '../pages/dashboard';
import DoctorProfile from '../pages/DoctorProfile';
import Home from '../pages/Home';
import OneSymptom from '../pages/sympthoms/sympthom/OneSymptom';
import Symptoms from '../pages/sympthoms/Symptoms';
import User from '../pages/User';

const symptomRoutes = [
  <Route exact path='/symptoms/skin' component={() => <OneSymptom title='Inflammatory Skin Conditions' />} />,
  <Route exact path='/symptoms/face-neck' component={() => <OneSymptom title='Hair loss, Tooth decay' />} />,
  <Route exact path='/symptoms/chest' component={() => <OneSymptom title='Pulmonary fibrosis, Cough' />} />,
  <Route exact path='/symptoms/stomach' component={() => <OneSymptom title='Vomiting, Diarrhea' />} />,
  <Route exact path='/symptoms/pelvis' component={() => <OneSymptom title='Rectal bleeding, Incontinence' />} />,
  <Route exact path='/symptoms/other' component={() => <OneSymptom title='Fatigue' />} />
];

const routesNotRequiringLogin = [
  <Route exact path='/' component={Home} />,
  <Route exact path='/articles' component={ArticleList} />,
  <Route
    exact
    path='/articles/:id'
    component={() => {
      const {id} = useParams<{id}>();
      return <OneArticle id={id} />;
    }}
  />,
  <Route exact path='/contact' component={Contact} />
];

const routesRequiringLogin = [
  <Route exact path='/user' component={User} />,
  <Route exact path='/dashboard' component={Dashboard} />,
  <Route exact path='/symptoms' component={Symptoms} />,
  ...symptomRoutes,
  <Route exact path='/me' component={() => <p>User profile page</p>} />,
  <Route exact path='/exampleNeedsLogin' component={() => <p>exampleNeedsLogin</p>} />,
  <Route
    exact
    path='/profile'
    component={() => {
      const authBackend = useAuthBackend();
      if (authBackend.user?.userType === UserType.DOCTOR) {
        return <DoctorProfile />;
      }
      return <p>User profile page</p>;
    }}
  />
];

export default function Routing(): ReactElement {
  const authBackend = useAuthBackend();

  return (
    <Switch>
      <Route exact path='/' component={Home} />

      {authBackend.isLoggedIn && routesRequiringLogin}
      {routesNotRequiringLogin}

      {!authBackend.isLoggedIn && <LoginWall />}
      <Route component={() => <p>Not found</p>} />
    </Switch>
  );
}
