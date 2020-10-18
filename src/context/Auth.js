import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/thunks/user";

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const {
    data: { user },
  } = useSelector((state) => state.user);

  useEffect(
    () => {
      dispatch(getUser());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <UserContext.Provider value={{ ...user }}>{children}</UserContext.Provider>
  );
};
export default AuthProvider;
