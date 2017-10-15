import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment } from "semantic-ui-react";
import axios from 'axios';
import SearchBookForm from "../forms/SearchBookForm";
import BookForm from "../forms/BookForm";
import { createBook } from '../../actions/books';

class NewBookPage extends React.Component{
	state = {
		book: null
	};

	onBookSelect = book => {
		this.setState({ book });
		axios.get(`/api/books/fetchPages?goodreadsId=${book.goodreadsId}`)
			.then(res => res.data.pages)
			.then(pages => this.setState({ book: { ...book, pages } }));
	};

	addBooks = (book) => this.props.createBook(book)
		.then(() => this.props.history.push('/dashboard'));

	render(){
		return (
			<div>
				<Segment>
					<h3>Add new Books to your phone</h3>
					<SearchBookForm onBookSelect={this.onBookSelect} />

					{this.state.book && 
						<BookForm submit={this.addBooks} book={this.state.book} />
					}
				</Segment>
			</div>

		);
	};
};

NewBookPage.propTypes = {
	createBook: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

export default connect(null, { createBook })(NewBookPage);