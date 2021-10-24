import React, {FC, ReactElement} from 'react';
import {Route, Switch, useParams} from 'react-router-dom';
import CreateTreatmentPlan from '../components/treatment-plant/CreateTreatmentPlan';
import {useAuthBackend} from '../context/AuthBackend';
import {UserType} from '../enum/UserType';
import ArticleList from '../pages/article/ArticleList';
import OneArticle from '../pages/article/OneArticle';
import OneArticleCreator from '../pages/article/OneArticleCreator';
import Chest from '../pages/Chest';
import Contact from '../pages/contact/Contact';
import Dashboard from '../pages/dashboard';
import DoctorProfile from '../pages/DoctorProfile';
import CurrentUserDocuments from '../pages/document/CurrentUserDocuments';
import DoctorDocuments from '../pages/document/DoctorDocuments';
import HeadNeck from '../pages/HeadNeck';
import HealthyEating from '../pages/HealthyEating';
import InflammatorySkin from '../pages/InflammatorySkin';
import Login from '../pages/Login';
import MentalHealth from '../pages/MentalHealth';
import Other from '../pages/Other';
import Pelvis from '../pages/Pelvis';
import PhysicalActivity from '../pages/PhysicalActivity';
import Scholar from '../pages/Scholar';
import Stomach from '../pages/Stomach';
import Survey from '../pages/Survey';
import Symptoms from '../pages/symptoms/Symptoms';
import TreatmentPlan from '../pages/TreatmentPlan';

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

const ProfilePageSwitcher: FC = () => {
  const authBackend = useAuthBackend();
  if (authBackend.user?.userType === UserType.DOCTOR) {
    return <DoctorProfile />;
  }
  return <Dashboard patientId={authBackend.user?.id} />;
};

const routesNotRequiringLogin = [<Route exact path="/contact" component={Contact} />];

const routesRequiringLogin = [
  <Route exact path="/" component={ProfilePageSwitcher} />,
  <Route exact path="/symptoms" component={Symptoms} />,
  ...symptomRoutes,
  <Route exact path="/scholar" component={Scholar} />,
  <Route exact path="/articles" component={ArticleList} />,
  <Route exact path="/survey/:id" component={Survey} />,
  <Route
    exact
    path="/myDocuments"
    component={() => {
      const authBackend = useAuthBackend();
      if (authBackend.user?.userType === UserType.DOCTOR) {
        return <DoctorDocuments />;
      }
      return <CurrentUserDocuments />;
    }}
  />,
  <Route
    exact
    path="/articles/read/:id"
    component={() => {
      const {id} = useParams<{id}>();
      return <OneArticle id={id} />;
    }}
  />,
  <Route exact path="/profile" component={ProfilePageSwitcher} />,

  <Route exact path="/contact" component={Contact} />,
  <Route exact path="/treatment-plan/:id" component={TreatmentPlan} />,
  <Route exact path="/create-treatment-plan" component={CreateTreatmentPlan} />,
];

const routesOnlyForDoctors = [<Route exact path="/articles/new" component={OneArticleCreator} />];

export default function Routing(): ReactElement {
  const authBackend = useAuthBackend();

  return (
    <Switch>
      {authBackend.isLoggedIn && routesRequiringLogin}
      {authBackend.isLoggedIn && authBackend.isDoctor && routesOnlyForDoctors}
      {routesNotRequiringLogin}

      {!authBackend.isLoggedIn && <Login />}
      <Route component={() => <p>Not found</p>} />
    </Switch>
  );
}
