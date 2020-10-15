import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import jokes from "./jokes";
import categories from "./kitsuCategories";

const rootReducer = combineReducers({
  user,
  jokes,
  categories,
});

export default rootReducer;
