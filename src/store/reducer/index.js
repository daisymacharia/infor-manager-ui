import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import jokes from "./jokes";

const rootReducer = combineReducers({
  user,
  jokes,
});

export default rootReducer;
