import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";
import { allBooksSelector } from '../../reducers/books';

const NavigationMenu = ({ user, logout, hashBooks }) => (
	<Menu secondary pointing>
		<Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>

		{ hashBooks && <Menu.Item as={Link} to="/my-phone/new-books">Add new books</Menu.Item>}
		
		<Menu.Menu position="right">
			<Dropdown trigger={<Image avatar src={gravatarUrl(user.email)}  />} >
				<Dropdown.Menu>
					<Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Menu>
	</Menu>	
);

NavigationMenu.propTypes = {
	user: PropTypes.shape({
		email: PropTypes.string.isRequired
	}).isRequired,
	hashBooks: PropTypes.bool.isRequired, 
	logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
	return {
		user: state.user,
		hashBooks: allBooksSelector(state).length > 0
	}
}

export default connect(mapStateToProps, { logout: actions.logout })(NavigationMenu);