import axios from "axios";
import { startLoading, setUser, setUserFailure } from "../reducer/user";

export const getHeaders = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
});

export const getApi = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true,
    headers: getHeaders(),
  });

const api = getApi();
console.log(api.defaults.headers);
export const loginUser = (data) => {
  return (dispatch) => {
    dispatch(startLoading());
    api
      .post("/login", data)
      .then((response) => {
        window.location = "/dashboard";
      })
      .catch((error) => {
        dispatch(setUserFailure(error.toString()));
      });
  };
};

export const registerUser = (data) => {
  return (dispatch) => {
    dispatch(startLoading());
    api
      .post("/register", data)
      .then((response) => {
        window.location = "/dashboard";
      })
      .catch((error) => {
        dispatch(setUserFailure(error.toString()));
      });
  };
};

export const getUser = () => {
  return (dispatch) => {
    dispatch(startLoading());
    api
      .get("/user")
      .then((response) => {
        console.log(response, "res");
        dispatch(setUser(response.data));
      })
      .catch((error) => {
        dispatch(setUserFailure(error.toString()));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(startLoading());
    api
      .get("/logout")
      .then((response) => {
        window.location = "/login";
      })
      .catch((error) => {
        dispatch(setUserFailure(error.toString()));
      });
  };
};
