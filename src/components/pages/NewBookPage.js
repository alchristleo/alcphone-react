import React from "react";
import { Segment } from "semantic-ui-react";
import SearchBookForm from "../forms/SearchBookForm";
import BookForm from "../forms/BookForm";

class NewBookPage extends React.Component{
	state = {
		books: null
	};

	onBookSelect = books => this.setState({ books });

	addBooks = () => console.log('asd');

	render(){
		return (
			<div>
				<Segment>
					<h3>Add new Books to your phone</h3>
					<SearchBookForm onBookSelect={this.onBookSelect} />

					{this.state.books && 
						<BookForm submit={this.addBooks} books={this.state.books} />
					}
				</Segment>
			</div>

		);
	};
};

export default NewBookPage;