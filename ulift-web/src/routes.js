import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./Pages/LandingPage/index";
import NotFound from "./Pages/NotFound/index";
import Register from "./Pages/Register/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={App} exact={true} path="/" />
        <Route component={Register} path="/register" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
