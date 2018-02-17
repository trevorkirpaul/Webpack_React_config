import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCats, createCat } from '../../actions/animals';
import Cat from './Cat';

export class AnimalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cats: [],
    };
  }
  handleSubmit = () => {
    const { name } = this.state;

    if (name !== '') {
      this.props.createCat(name);
      this.setState(() => ({ name: '' }));
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
  componentWillReceiveProps(nextProps) {
    const cats = nextProps.cats || [];
    if (cats.length !== 0) {
      this.setState(() => ({ cats }));
    }
  }
  render() {
    return (
      <Cat
        handleSubmit={this.handleSubmit}
        handleOnChange={this.handleOnChange}
        name={this.state.name}
        cats={this.state.cats}
      />
    );
  }
}

const mapStateToProps = state => ({
  cats: state.animals.cats,
});

const mapDispatchToProps = dispatch => ({
  getCats: () => dispatch(getCats()),
  createCat: name => dispatch(createCat(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer);
