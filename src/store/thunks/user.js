import axios from "axios";
import { setFetchStatus, setUser, setUserFailure } from "../reducer/user";
import { apiStatus } from "../../utils/apiStatus";

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
export const loginUser = (data) => {
  return (dispatch) => {
    dispatch(setFetchStatus(apiStatus.fetching));
    api
      .post("api/login", data)
      .then((response) => {
        dispatch(setFetchStatus(apiStatus.completed));
        window.location = "/dashboard";
      })
      .catch((error) => {
        dispatch(setFetchStatus(apiStatus.error));
        dispatch(setUserFailure(error.toString()));
      });
  };
};

export const registerUser = (data) => {
  return (dispatch) => {
    dispatch(setFetchStatus(apiStatus.fetching));
    api
      .post("api/register", data)
      .then((response) => {
        dispatch(setFetchStatus(apiStatus.completed));
        dispatch(setUser(response.data));
        window.location = "/dashboard";
      })
      .catch((error) => {
        console.log(error);
        dispatch(setFetchStatus(apiStatus.error));
      });
  };
};

export const getUser = () => {
  return (dispatch) => {
    dispatch(setFetchStatus(apiStatus.fetching));
    api
      .get("api/user")
      .then((response) => {
        dispatch(setFetchStatus(apiStatus.completed));
        dispatch(setUser(response.data));
      })
      .catch((error) => {
        dispatch(setFetchStatus(apiStatus.completed));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(setFetchStatus(apiStatus.fetching));
    api
      .post("api/logout")
      .then((response) => {
        dispatch(setFetchStatus(apiStatus.completed));
        window.location = "/login";
      })
      .catch((error) => {
        dispatch(setFetchStatus(apiStatus.error));
        dispatch(setUserFailure(error.toString()));
      });
  };
};
