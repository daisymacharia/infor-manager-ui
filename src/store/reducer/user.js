import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  data: {},
  loading: false,
  error: null,
};

const addUser = createSlice({
  name: "user",
  initialState: InitialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    setUser(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    setUserFailure(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const { startLoading, setUser, setUserFailure } = addUser.actions;
export default addUser.reducer;
