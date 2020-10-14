import axios from "axios";
import { startLoading, setUser, setUserFailure } from "../reducer/user";

export const getApi = () =>
  axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
  });

const api = getApi();

export const loginUser = (data) => {
  return (dispatch) => {
    dispatch(startLoading());
    api
      .post("/login", data)
      .then((response) => {
        console.log(response);
        dispatch(setUser(response.data));
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
        dispatch(setUser(response.data));
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
        console.log(response);
        dispatch(setUser(response.data));
      })
      .catch((error) => {
        dispatch(setUserFailure(error.toString()));
      });
  };
};
