import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Segment, Grid, Image } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class AppForm extends React.Component {
  state = {
    data: {
      appId: this.props.application.appId,
      name: this.props.application.name,
      developer: this.props.application.developer,
      logo: this.props.application.logo
    },
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(props){
    this.setState({
      data: {
        appId: props.application.appId,
        name: props.application.name,
        developer: props.application.developer,
        logo: props.application.logo
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

    if (!data.name) errors.name = "Can't be blank";
    if (!data.developer) errors.developer = "Can't be blank";
    if (!data.logo) errors.logo = "Can't be blank";

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
                <Form.Field error={!!errors.name}>
                  <label htmlFor="name">Application name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Application name"
                    value={data.name}
                    onChange={this.onChange}
                  />
                  {errors.name && <InlineError text={errors.name} />}
                </Form.Field>

                <Form.Field error={!!errors.developer}>
                  <label htmlFor="developer">Application developer</label>
                  <input
                    type="text"
                    id="developer"
                    name="developer"
                    placeholder="Application developer"
                    value={data.developer}
                    onChange={this.onChange}
                  />
                  {errors.developer && <InlineError text={errors.developer} />}
                </Form.Field>
              </Grid.Column>

              <Grid.Column>
                <Image size="small" src={data.logo} />
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

AppForm.propTypes = {
  submit: PropTypes.func.isRequired,
  application: PropTypes.shape({
    appId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    developer: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired 
  }).isRequired
};

export default AppForm;
