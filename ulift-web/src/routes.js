import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={App} exact={true} path="/" />
        <Route component={Register} path="/register" />
        <Route component={Login} path="/login" />
        <Route component={Forgot} path="/forgot" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
