import { combineReducers } from "redux";

import user from "./reducers/user";
import admin from "./reducers/admin";
import books from "./reducers/books";

export default combineReducers({
  user, admin, books
});
