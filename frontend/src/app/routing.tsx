import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

interface Props {}

export default function Routing({}: Props): ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
