import axios from "axios";
import { apiStatus } from "../../utils/apiStatus";
import { setFetchStatus, setJokes } from "../reducer/jokes";

export const getJokes = () => {
  return (dispatch) => {
    dispatch(setFetchStatus(apiStatus.fetching));
    axios
      .get("https://official-joke-api.appspot.com/jokes/ten")
      .then((response) => {
        dispatch(setFetchStatus(apiStatus.completed));
        dispatch(setJokes(response.data));
      })
      .catch((error) => {
        dispatch(setFetchStatus(apiStatus.error));
      });
  };
};
