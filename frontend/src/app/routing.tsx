import React, {ReactElement} from 'react';
import {Route, Switch, useParams} from 'react-router-dom';
import {useAuthBackend} from '../context/AuthBackend';
import ArticleList from '../pages/article/ArticleList';
import OneArticle from '../pages/article/OneArticle';
import OneArticleCreator from '../pages/article/OneArticleCreator';
import Contact from '../pages/contact/Contact';
import Dashboard from '../pages/dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Scholar from '../pages/Scholar';
import OneSymptom from '../pages/sympthoms/sympthom/OneSymptom';
import Symptoms from '../pages/sympthoms/Symptoms';
import TreatmentPlan from '../pages/TreatmentPlan';
import User from '../pages/User';
import PhysicalActivity from '../pages/PhysicalActivity';
import HealthyEating from '../pages/HealthyEating';
import MentalHealth from '../pages/MentalHealth';
import InflammatorySkin from '../pages/InflammatorySkin';
import HeadNeck from '../pages/HeadNeck';
import Chest from '../pages/Chest';
import Stomach from '../pages/Stomach';
import Pelvis from '../pages/Pelvis';
import Other from '../pages/Other';
import CurrentUserDocuments from '../pages/document/CurrentUserDocuments';
import DoctorProfile from '../pages/DoctorProfile';
import {UserType} from '../enum/UserType';
import DoctorDocuments from '../pages/document/DoctorDocuments';

const symptomRoutes = [
  <Route exact path="/symptoms/inflammatory-skin" component={() => <InflammatorySkin />} />,
  <Route exact path="/symptoms/head-neck" component={() => <HeadNeck />} />,
  <Route exact path="/symptoms/chest" component={() => <Chest />} />,
  <Route exact path="/symptoms/stomach" component={() => <Stomach />} />,
  <Route exact path="/symptoms/pelvis" component={() => <Pelvis />} />,
  <Route exact path="/symptoms/other" component={() => <Other />} />,
  <Route exact path="/symptoms/physical-activity" component={() => <PhysicalActivity />} />,
  <Route exact path="/symptoms/healthy-eating" component={() => <HealthyEating />} />,
  <Route exact path="/symptoms/mental-health" component={() => <MentalHealth />} />,
];

const routesNotRequiringLogin = [
  <Route exact path="/" component={Home} />,
  <Route exact path="/contact" component={Contact} />,
];

const routesRequiringLogin = [
  <Route exact path="/user" component={User} />,
  <Route exact path="/symptoms" component={Symptoms} />,
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
    path="/articles/read/:id"
    component={() => {
      const {id} = useParams<{id}>();
      return <OneArticle id={id} />;
    }}
  />,
  <Route
    exact
    path="/profile"
    component={() => {
      const authBackend = useAuthBackend();
      if (authBackend.user?.userType === UserType.DOCTOR) {
        return <DoctorProfile />;
      }
      return <Dashboard patientId={authBackend.user?.id} />;
    }}
  />,
  <Route exact path="/contact" component={Contact} />,
  <Route exact path="/treatment-plan" component={TreatmentPlan} />,
];

const routesOnlyForDoctors = [<Route exact path="/articles/new" component={OneArticleCreator} />];

export default function Routing(): ReactElement {
  const authBackend = useAuthBackend();

  return (
    <Switch>
      <Route exact path="/" component={Home} />

      {authBackend.isLoggedIn && routesRequiringLogin}
      {authBackend.isLoggedIn && authBackend.isDoctor && routesOnlyForDoctors}
      {routesNotRequiringLogin}

      {!authBackend.isLoggedIn && <Login />}
      <Route component={() => <p>Not found</p>} />
    </Switch>
  );
}
