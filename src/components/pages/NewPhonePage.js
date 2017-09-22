import React from "react";
import { Segment } from "semantic-ui-react";
import SearchApplicationForm from "../forms/SearchApplicationForm";

class NewPhonePage extends React.Component{
	state = {
		phone: null
	};

	render(){
		return (
			<Segment>
				<h1>Add new application to your phone</h1>
				<SearchApplicationForm />
			</Segment>
		);
	};
};

export default NewPhonePage;