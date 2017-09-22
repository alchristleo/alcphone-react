import React from "react";
import { Form, Dropdown } from "semantic-ui-react";

class SearchApplicationForm extends React.Component{
	state = {
		query: '',
		loading: false,
		options: [{
			key: 1,
			value: 1, 
			text: "first phone"
		},{
			key: 1,
			value: 2, 
			text: "first phone"
		}],
		application: {}
	}

	render(){
		return (
			<Form>
				<Dropdown search fluid placeholder="Search for an application">

				</Dropdown>
			</Form>
		);
	};
};

export default SearchApplicationForm;