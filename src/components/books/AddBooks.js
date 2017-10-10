import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddBooks = () => (
	<Card centered>
		<Card.Content textAlign="center">
			<Card.Header>Add new Books</Card.Header>
			<Link to="/my-phones/new"><Icon name="plus circle" size="huge" /></Link>
		</Card.Content>
	</Card>
);

export default AddBooks;