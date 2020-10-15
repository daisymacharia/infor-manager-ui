import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dashboard, Login, Register } from "./pages";
import AuthProvider from "./context/Auth";
import { PrivateRoute } from "./components";

const Routes = () => {
  return (
    <AuthProvider>
      <Router>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Router>
    </AuthProvider>
  );
};

export default Routes;
