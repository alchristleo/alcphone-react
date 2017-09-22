import React from "react";
import { Segment } from "semantic-ui-react";
import SearchApplicationForm from "../forms/SearchApplicationForm";
import AppForm from "../forms/AppForm";

class NewPhonePage extends React.Component{
	state = {
		application: null
	};

	onAppSelect = application => this.setState({ application });

	addApp = () => console.log('asd');

	render(){
		return (
			<Segment>
				<h3>Add new application to your phone</h3>
				<SearchApplicationForm onAppSelect={this.onAppSelect} />

				{this.state.application && 
					<AppForm submit={this.addApp} application={this.state.application} />
				}
			</Segment>
		);
	};
};

export default NewPhonePage;