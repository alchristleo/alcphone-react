import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AdminSignupForm from "../../forms/admin/AdminSignupForm";
import { adminSignup } from "../../../actions/users";

class AdminSignupPage extends React.Component {
  submit = data =>
    this.props.adminSignup(data).then(() => this.props.history.push("/admin/dashboard"));

  render() {
    return (
      <div>
        <AdminSignupForm submit={this.submit} />
      </div>
    );
  }
}

AdminSignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  adminSignup: PropTypes.func.isRequired
};

export default connect(null, { adminSignup })(AdminSignupPage);
