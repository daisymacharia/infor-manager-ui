import axios from "axios";
import { startLoading, setUser, setUserFailure } from "../reducer/user";

export const loginUser = (data) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .post("http://localhost:8080/login", data)
      .then((reponse) => {
        dispatch(setUser(reponse.data));
      })
      .catch((error) => {
        console.log(error.toString());
        dispatch(setUserFailure(error.toString()));
      });
  };
};
