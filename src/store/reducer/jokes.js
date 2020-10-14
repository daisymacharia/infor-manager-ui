import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  data: {},
};

const addJokes = createSlice({
  name: "jokes",
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
    setJokes(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          jokes: action.payload,
        },
      };
    },
  },
});

export const { setFetchStatus, setJokes } = addJokes.actions;
export default addJokes.reducer;
