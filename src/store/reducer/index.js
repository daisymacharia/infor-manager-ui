import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import jokes from "./jokes";
import categories from "./categories";
import anime from "./anime";

const rootReducer = combineReducers({
  user,
  jokes,
  categories,
  anime,
});

export default rootReducer;
