import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const HomePage = ({ isAuthenticated, isAdmin, logout, adminLogout }) => (
  <div>
    <h1>Home Page</h1>
    {isAuthenticated ? (
      <div>
        <h4>You are logged in as User</h4>
        <button onClick={() => logout()}>Logout</button>
      </div>
    ) : isAdmin ? (
      <div>
        <h4>You are logged in as Admin</h4>
        <button onClick={() => adminLogout()}>Logout</button>
      </div>
    ) : (
      <div>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
      </div>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  adminLogout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token, isAdmin: !!state.admin.token
  };
}

export default connect(mapStateToProps, { logout: actions.logout, adminLogout: actions.adminLogout })(HomePage);
