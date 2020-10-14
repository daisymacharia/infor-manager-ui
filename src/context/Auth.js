import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/thunks/user";

// export const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }
export const UserContext = createContext({ name: "", auth: false });

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const { data } = useSelector((state) => state.user);

  useEffect(
    () => {
      dispatch(getUser());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const setCurrentUser = () => {
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ user, setUser: setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default AuthProvider;
