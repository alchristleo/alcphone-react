import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allApplicationSelector } from "../../reducers/application";
import AddApplication from "../phones/AddApplication";

const DashboardPage = ({ isConfirmed, application }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}

    {application.length === 0 && <AddApplication />}
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  application: PropTypes.arrayOf(PropTypes.shape({
  	name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    application: allApplicationSelector(state)
  };
}

export default connect(mapStateToProps)(DashboardPage);
