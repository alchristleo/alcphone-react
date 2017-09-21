import api from "../api";
import { userLoggedIn, adminLoggedIn } from "./auth";

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.alcphoneJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const adminSignup = data => dispatch =>
  api.admin.adminSignup(data).then(admin => {
    localStorage.alcphoneAdminJWT = admin.token;
    dispatch(adminLoggedIn(admin));
  });
