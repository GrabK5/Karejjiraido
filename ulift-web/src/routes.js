import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./Pages/LandingPage/index";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={App} exact={true} path="/" />
        <Route component={Register} path="/register" />
        <Route component={Login} path="/login" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
