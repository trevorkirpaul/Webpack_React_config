import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCats } from '../../actions/animals';
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
      // this.props.createAnimal(name, color);
      this.setState(() => ({ name: '', color: '' }));
    }
  };
  handleOnChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  // lifecyle
  componentDidMount() {
    this.props.getCats();
  }
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
  getCats: () => dispatch(getCats()),
});

export default connect(null, mapDispatchToProps)(AnimalContainer);
