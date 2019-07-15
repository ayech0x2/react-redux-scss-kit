import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";

import HomePage from "../pages/home/HomePage";

const Routes = ({location}) => {
  return (
    <Switch location={location}>
      <Route path="/" exact component={HomePage}/>
    </Switch>
  );
};

export default Routes;
