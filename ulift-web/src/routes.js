import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={App} exact={true} path="/" />
        <Route component={Register} path="/register" />
        <Route component={Login} path="/login" />
        <Route component={Chat} path="/chat" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
