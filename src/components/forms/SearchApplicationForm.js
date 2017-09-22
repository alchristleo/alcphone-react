import React from "react";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";

class SearchApplicationForm extends React.Component{
	state = {
		query: '',
		loading: false,
		options: [],
		application: {}
	}

	onSearchChange = (e, data) => {
		clearTimeout(this.timer);
		this.setState({
			query: data
		});
		this.timer = setTimeout(this.fetchOptions, 1000);
	}

	fetchOptions = () => {
		if(!this.state.query) return;
		this.setState({ loading: true });
		axios.get(`/api/app/search?q=${this.state.query}`)
			.then(res => res.data.application);
	}

	render(){
		return (
			<Form>
				<Dropdown 
					search 
					fluid 
					placeholder="Search for an application"
					value={this.state.query}
					onSearchChange={this.onSearchChange}
					options={this.state.options}
					loading={this.state.loading} 
				/>
			</Form>
		);
	};
};

export default SearchApplicationForm;