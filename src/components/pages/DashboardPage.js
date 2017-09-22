import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allPhonesSelector } from "../../reducers/phones";
import AddPhone from "../phones/AddPhone";

const DashboardPage = ({ isConfirmed, phones }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}

    {phones.length === 0 && <AddPhone />}
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  phones: PropTypes.arrayOf(PropTypes.shape({
  	name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    phones: allPhonesSelector(state)
  };
}

export default connect(mapStateToProps)(DashboardPage);
