import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadInitialData from "../LoadInitialData/LoadInitialData";

function PrivateRoute({ component: Component, ...rest }) {
  const { data, error } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (error) {
          return <Redirect to="/login" />;
        } else {
          if (data.username) {
            return <Component {...props} />;
          } else {
            return <LoadInitialData />;
          }
        }
      }}
    />
  );
}

export default PrivateRoute;
