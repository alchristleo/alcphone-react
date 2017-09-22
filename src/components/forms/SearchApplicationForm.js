import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Form, Dropdown } from "semantic-ui-react";

class SearchApplicationForm extends React.Component{
	state = {
		query: '',
		loading: false,
		options: [],
		application: {}
	};

	onChange = (e, data) => {
		this.setState({ query: data.value });
		this.props.onAppSelect(this.state.application[data.value]);
	};

	onSearchChange = (e, data) => {
		clearTimeout(this.timer);
		this.setState({
			query: data
		});
		this.timer = setTimeout(this.fetchOptions, 1000);
	};

	fetchOptions = () => {
		if(!this.state.query) return;
		this.setState({ loading: true });
		axios.get(`/api/app/search?q=${this.state.query}`)
			.then(res => res.data.application)
			.then(application => {
				const options = [];
				const appHash = {};
				application.forEach(app => {
					appHash[app.appId] = app;
					options.push({
						key: app.appId,
						value: app.appId,
						text: app.name
					});
				});
				this.setState({ loading: false, options, application: appHash })	
			});
	};

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
					onChange={this.onChange} 
				/>
			</Form>
		);
	};
};

SearchApplicationForm.propTypes = {
	onAppSelect: PropTypes.func.isRequired
}

export default SearchApplicationForm;