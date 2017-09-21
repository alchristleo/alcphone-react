import { combineReducers } from "redux";

import user from "./reducers/user";
import admin from "./reducers/admin";

export default combineReducers({
  user,
  admin
});
