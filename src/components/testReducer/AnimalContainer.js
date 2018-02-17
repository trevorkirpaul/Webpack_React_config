import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAnimal } from '../../actions/animals';
import Cat from './Cat';

export class AnimalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',
    };
  }
  handleSubmit = () => {
    const { name, color } = this.state;

    if (name !== '' && color !== '') {
      this.props.createAnimal(name, color);
      this.setState(() => ({ name: '', color: '' }));
    }
  };
  handleOnChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Cat
        handleSubmit={this.handleSubmit}
        handleOnChange={this.handleOnChange}
        name={this.state.name}
        color={this.state.color}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createAnimal: (name, color) => dispatch(createAnimal(name, color)),
});

export default connect(null, mapDispatchToProps)(AnimalContainer);
