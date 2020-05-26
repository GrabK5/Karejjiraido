import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./Pages/LandingPage/index";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={LandingPage} exact={true} path="/" />
        <Route component={Register} path="/register" />
        <Route component={Login} path="/login" />
        <Route component={Forgot} path="/forgot" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
