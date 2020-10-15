import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  data: {},
};

const addCategories = createSlice({
  name: "categories",
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
    setCategories(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          categories: action.payload,
        },
      };
    },
  },
});

export const { setFetchStatus, setCategories } = addCategories.actions;
export default addCategories.reducer;
