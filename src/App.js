import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";

import "./App.css";

const Routes = (
  <Router>
    <Route exact path="/login" component={Login} />
  </Router>
);

export default Routes;
