import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../../messages/ConfirmEmailMessage";

const AdminDashboardPage = ({ isConfirmed }) => (
  <div>
    <h1>Admin Dashboard Page</h1>
    {!isConfirmed && <ConfirmEmailMessage />}
  </div>
);

AdminDashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.admin.confirmed
  };
}

export default connect(mapStateToProps)(AdminDashboardPage);
