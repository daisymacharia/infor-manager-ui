import axios from "axios";
import { apiStatus } from "../../../utils/apiStatus";
import { setFetchStatus, setCategories } from "../../reducer/categories";

export const getCategories = () => {
  return (dispatch) => {
    dispatch(setFetchStatus(apiStatus.fetching));
    axios
      .get("https://kitsu.io/api/edge/categories")
      .then((reponse) => {
        dispatch(setFetchStatus(apiStatus.completed));
        dispatch(setCategories(reponse.data));
      })
      .catch((error) => {
        dispatch(setFetchStatus(apiStatus.error));
      });
  };
};
