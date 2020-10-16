import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  data: {},
};

const getAnime = createSlice({
  name: "anime",
  initialState: InitialState,
  reducers: {
    setFetchStatus(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          status: action.payload,
        },
      };
    },
    setAnime(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          anime: action.payload,
        },
      };
    },
  },
});

export const { setFetchStatus, setAnime } = getAnime.actions;
export default getAnime.reducer;
