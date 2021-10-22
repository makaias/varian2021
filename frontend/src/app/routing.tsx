import React, {ReactElement} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import {useAuthBackend} from "../context/AuthBackend";
import LoginWall from "../components/login/LoginWall";
import AtiGrafikontTesztel from "../pages/AtiGrafikontTesztel";

interface Props {
}

export default function Routing({}: Props): ReactElement {
  const authBackend = useAuthBackend();

  const routesRequiringLogin = [
    <Route exact path='/me' component={() => <p>User profile page</p>} />,
    <Route exact path='/exampleNeedsLogin' component={() => <p>exampleNeedsLogin</p>} />
  ];
  return (
    <Switch>
      <Route exact path='/' component={Home} />

      {authBackend.isLoggedIn && routesRequiringLogin}

            <Route exact path="/ati" component={AtiGrafikontTesztel} />
            <Route exact path="/articles" component={() => <p>Articles page</p>}/>

      {!authBackend.isLoggedIn && (
        <LoginWall />
      )}
      <Route component={() => <p>Not found</p>} />
    </Switch>
  );
}
