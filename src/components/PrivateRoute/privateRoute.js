import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/Auth";

function PrivateRoute({ component: Component, ...rest }) {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user?.user?.username ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
