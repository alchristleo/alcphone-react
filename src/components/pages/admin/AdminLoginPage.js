import React from 'react';
import PropTypes from 'prop-types';
import AdminLoginForm from '../../forms/admin/AdminLoginForm';
import { connect } from 'react-redux';
import { adminLogin } from '../../../actions/auth';

class AdminLoginPage extends React.Component{
  submit = data =>
    this.props.adminLogin(data).then(() => this.props.history.push("/admin/dashboard"));

  render () {
    return (
      <div>
        <h1>Admin Login Page</h1>

        <AdminLoginForm submit={this.submit} />
      </div>
    );
  };
};

AdminLoginPage.propTypes = {
  adminLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(null, { adminLogin })(AdminLoginPage);
