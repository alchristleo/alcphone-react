import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddApplication = () => (
	<Card centered>
		<Card.Content textAlign="center">
			<Card.Header>Add new application</Card.Header>
			<Link to="/my-phones/new"><Icon name="plus circle" size="huge" /></Link>
		</Card.Content>
	</Card>
);

export default AddApplication;