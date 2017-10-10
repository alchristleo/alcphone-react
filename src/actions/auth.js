import { USER_LOGGED_IN, USER_LOGGED_OUT, ADMIN_LOGGED_IN, ADMIN_LOGGED_OUT } from "../types";
import api from "../api";
import setAuthorizationHeader from '../utils/setAuthorizationHeader';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const adminLoggedIn = admin => ({
  type: ADMIN_LOGGED_IN,
  admin
});

export const adminLoggedOut = () => ({
  type: ADMIN_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.alcphoneJWT = user.token;
    setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("alcphoneJWT");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};

export const adminLogin = credentials => dispatch =>
  api.admin.adminLogin(credentials).then(admin => {
    localStorage.alcphoneAdminJWT = admin.token;
    setAuthorizationHeader(admin.token);
    dispatch(adminLoggedIn(admin));
  });

export const adminLogout = () => dispatch => {
  localStorage.removeItem("alcphoneAdminJWT");
  setAuthorizationHeader();
  dispatch(adminLoggedOut());
}

export const confirm = token => dispatch =>
  api.user.confirm(token).then(user => {
    localStorage.alcphoneJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const adminConfirm = token => dispatch =>
  api.admin.adminConfirm(token).then(admin => {
    localStorage.alcphoneAdminJWT = admin.token;
    dispatch(adminLoggedIn(admin));
  });

export const resetPasswordRequest = ({ email }) => () =>
  api.user.resetPasswordRequest(email);

export const validateToken = token => () =>
  api.user.validateToken(token);

export const resetPassword = data => () =>
  api.user.resetPassword(data);
