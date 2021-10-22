import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import AtiGrafikontTesztel from "../pages/AtiGrafikontTesztel";
import Home from "../pages/Home";

interface Props {}

export default function Routing({}: Props): ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ati" component={AtiGrafikontTesztel} />
    </Switch>
  );
}
