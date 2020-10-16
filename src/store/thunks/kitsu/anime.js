import axios from "axios";
import { apiStatus } from "../../../utils/apiStatus";
import { setFetchStatus, setAnime } from "../../reducer/anime";

export const getAnime = (category) => {
  return (dispatch) => {
    dispatch(setFetchStatus(apiStatus.fetching));
    axios
      .get(`https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${category}`)
      .then((reponse) => {
        dispatch(setFetchStatus(apiStatus.completed));
        dispatch(setAnime(reponse.data));
      })
      .catch((error) => {
        dispatch(setFetchStatus(apiStatus.error));
      });
  };
};

// https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=adventure
