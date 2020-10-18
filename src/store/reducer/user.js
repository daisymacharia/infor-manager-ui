import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  data: {},
};

const addUser = createSlice({
  name: "user",
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
    setUser(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    setUserFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setFetchStatus, setUser, setUserFailure } = addUser.actions;
export default addUser.reducer;
