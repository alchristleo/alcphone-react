import { combineReducers } from "redux";

import user from "./reducers/user";
import admin from "./reducers/admin";
import phones from "./reducers/phones";

export default combineReducers({
  user, admin, phones
});
