import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
//user
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
//admin
import AdminLoginPage from "./components/pages/admin/AdminLoginPage";
import AdminDashboardPage from "./components/pages/admin/AdminDashboardPage";
import AdminSignupPage from "./components/pages/admin/AdminSignupPage";
import AdminConfirmationPage from "./components/pages/admin/AdminConfirmationPage";
//route
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import AdminLoginRoute from "./components/routes/AdminLoginRoute";
import AdminRoute from "./components/routes/AdminRoute";

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={HomePage} />
    <Route
      location={location}
      path="/confirmation/:token"
      exact
      component={ConfirmationPage}
    />
    <Route
      location={location}
      path="/admin/confirmation/:token"
      exact
      component={AdminConfirmationPage}
    />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <AdminLoginRoute location={location}
      path="/admin/login"
      exact
      component={AdminLoginPage}
    />
    <GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignupPage}
    />
    <AdminLoginRoute
      location={location}
      path="/admin/signup"
      exact
      component={AdminSignupPage}
    />
    <GuestRoute
      location={location}
      path="/forgot_password"
      exact
      component={ForgotPasswordPage}
    />
    <GuestRoute
      location={location}
      path="/reset_password/:token"
      exact
      component={ResetPasswordPage}
    />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={DashboardPage}
    />
    <AdminRoute
      location={location}
      path="/admin/dashboard"
      exact
      component={AdminDashboardPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
