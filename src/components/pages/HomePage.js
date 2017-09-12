import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../actions/auth";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Home Page</h1>
    { isAuthenticated ? (
        <Button primary onClick={() => logout()}>Logout</Button>
      ) : (
      <Link to="/login">Login</Link>
      )
    }
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
      isAuthenticated: !!state.user.token
    };
};

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
