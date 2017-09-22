import { combineReducers } from "redux";

import user from "./reducers/user";
import admin from "./reducers/admin";
import application from "./reducers/application";

export default combineReducers({
  user, admin, application
});
