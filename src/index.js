import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import decode from "jwt-decode";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./rootReducer";
import { userLoggedIn, adminLoggedIn } from "./actions/auth";
import setAuthorizationHeader from './utils/setAuthorizationHeader';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.alcphoneJWT) {
  const payload = decode(localStorage.alcphoneJWT);
  const user = {
    token: localStorage.alcphoneJWT,
    email: payload.email,
    confirmed: payload.confirmed
  };
  setAuthorizationHeader(localStorage.alcphoneJWT);
  store.dispatch(userLoggedIn(user));
}else if (localStorage.alcphoneAdminJWT) {
  const payload = decode(localStorage.alcphoneAdminJWT);
  const admin = {
    token: localStorage.alcphoneAdminJWT,
    email: payload.email,
    confirmed: payload.confirmed
  };
  setAuthorizationHeader(localStorage.alcphoneAdminJWT);
  store.dispatch(adminLoggedIn(admin));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
