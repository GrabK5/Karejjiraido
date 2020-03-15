import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import NotFound from "./Pages/NotFound/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={App} exact={true} path="/" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
