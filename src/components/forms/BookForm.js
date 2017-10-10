import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Segment, Grid, Image } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class BookForm extends React.Component {
  state = {
    data: {
      bookId: this.props.books.bookId,
      title: this.props.books.title,
      author: this.props.books.author,
      cover: this.props.books.cover,
    },
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(props){
    this.setState({
      data: {
        bookId: props.books.bookId,
        title: props.books.title,
        author: props.books.author,
        cover: props.books.cover
      }
    });
  }

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    if (!data.title) errors.title = "Can't be blank";
    if (!data.author) errors.author = "Can't be blank";
    if (!data.cover) errors.cover = "Can't be blank";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} className="fluid" stackable>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={!!errors.title}>
                  <label htmlFor="name">Books Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Books Title"
                    value={data.title}
                    onChange={this.onChange}
                  />
                  {errors.title && <InlineError text={errors.title} />}
                </Form.Field>

                <Form.Field error={!!errors.author}>
                  <label htmlFor="author">Books Author</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Books author"
                    value={data.author}
                    onChange={this.onChange}
                  />
                  {errors.author && <InlineError text={errors.author} />}
                </Form.Field>
              </Grid.Column>

              <Grid.Column>
                <Image size="small" src={data.cover} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Button primary>Save</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

BookForm.propTypes = {
  submit: PropTypes.func.isRequired,
  books: PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired 
  }).isRequired
};

export default BookForm;
