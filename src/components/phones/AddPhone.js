import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddPhone = () => (
	<Card centered>
		<Card.Content textAlign="center">
			<Card.Header>Add new phone</Card.Header>
			<Link to="/phones/new"><Icon name="plus circle" size="huge" /></Link>
		</Card.Content>
	</Card>
);

export default AddPhone;