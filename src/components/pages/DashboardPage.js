import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import AddBooks from "../books/AddBooks";
import { allBooksSelector } from "../../reducers/books";
import { fetchBooks } from '../../actions/books';

class DashboardPage extends React.Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = (props) => props.fetchBooks();

  render(){
    const { isConfirmed, books } = this.props;
    return (
        <div>
          {!isConfirmed && <ConfirmEmailMessage />}

          {books.length === 0 ? <AddBooks /> : <p>You have books</p>}
        </div>
      );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
  	title: PropTypes.string.isRequired
  }).isRequired).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  };
}

export default connect(mapStateToProps, { fetchBooks })(DashboardPage);
