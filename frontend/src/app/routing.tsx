import React, {ReactElement} from 'react';
import {Route, Switch, useParams} from 'react-router-dom';
import LoginWall from '../components/login/LoginWall';
import {useAuthBackend} from '../context/AuthBackend';
import ArticleList from '../pages/article/ArticleList';
import OneArticle from '../pages/article/OneArticle';
import OneArticleCreator from '../pages/article/OneArticleCreator';
import Contact from '../pages/contact/Contact';
import Dashboard from '../pages/dashboard';
import Home from '../pages/Home';
import Scholar from '../pages/Scholar';
import OneSymptom from '../pages/symptoms/sympthom/OneSymptom';
import Symptoms from '../pages/symptoms/Symptoms';
import User from '../pages/User';
import CurrentUserDocuments from '../pages/document/CurrentUserDocuments';
import DoctorProfile from '../pages/DoctorProfile';
import {UserType} from '../enum/UserType';
import DoctorDocuments from '../pages/document/DoctorDocuments';

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
  <Route exact path='/contact' component={Contact} />
];

const routesRequiringLogin = [
  <Route exact path='/user' component={User} />,
  <Route exact path='/symptoms' component={Symptoms} />,
  ...symptomRoutes,
  <Route exact path='/scholar' component={Scholar} />,
  <Route exact path='/articles' component={ArticleList} />,
  <Route exact path='/myDocuments' component={() => {
    const authBackend = useAuthBackend();
    if (authBackend.user?.userType === UserType.DOCTOR) {
      return <DoctorDocuments />;
    }
    return <CurrentUserDocuments />;
  }} />,
  <Route
    exact
    path='/articles/read/:id'
    component={() => {
      const {id} = useParams<{id}>();
      return <OneArticle id={id} />;
    }}
  />,
  <Route
    exact
    path='/profile'
    component={() => {
      const authBackend = useAuthBackend();
      if (authBackend.user?.userType === UserType.DOCTOR) {
        return <DoctorProfile />;
      }
      return <Dashboard patientId={authBackend.user?.id} />;
    }}
  />,
  <Route exact path='/contact' component={Contact} />
];

const routesOnlyForDoctors = [<Route exact path='/articles/new' component={OneArticleCreator} />];

export default function Routing(): ReactElement {
  const authBackend = useAuthBackend();

  return (
    <Switch>
      <Route exact path='/' component={Home} />

      {authBackend.isLoggedIn && routesRequiringLogin}
      {authBackend.isLoggedIn && authBackend.isDoctor && routesOnlyForDoctors}
      {routesNotRequiringLogin}

      {!authBackend.isLoggedIn && <LoginWall />}
      <Route component={() => <p>Not found</p>} />
    </Switch>
  );
}
