import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getCats,
  createCat,
  deleteCat,
  updateCat,
} from '../../actions/animals';
import Cat from './Cat';
import ModalForm from '../reusable/ModalForm';

export class AnimalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      newName: '',
      id: '',
      cats: [],
      modalIsOpen: false,
    };
  }
  // Cat
  handleSubmit = () => {
    const { name } = this.state;

    if (name !== '') {
      this.props.createCat(name);
      this.setState(() => ({ name: '' }));
    }
  };
  handleDelete = id => {
    this.props.deleteCat(id);
  };
  handleOnChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  handleUpdate = () => {
    const { newName, id } = this.state;
    this.props.updateCat(id, newName);
    this.setState({ newName: '', name: '', id: '', modalIsOpen: false });
  };
  // Modal
  openModal = (name, id) => {
    this.setState({ modalIsOpen: true, name, id });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false, name: '', id: '' });
  };
  afterMOdalOpen = () => {
    console.log('modal');
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
      <div>
        <Cat
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
          handleOnChange={this.handleOnChange}
          name={this.state.name}
          cats={this.state.cats}
          openModal={this.openModal}
        />
        <ModalForm
          isOpen={this.state.modalIsOpen}
          reqClose={this.closeModal}
          title="Edit Cat"
          subtitle="Please complete the following fields"
          afterOpen={this.afterMOdalOpen}
          catName={this.state.name}
          handleOnChange={this.handleOnChange}
          newName={this.state.newName}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cats: state.animals.cats,
});

const mapDispatchToProps = dispatch => ({
  getCats: () => dispatch(getCats()),
  createCat: name => dispatch(createCat(name)),
  deleteCat: id => dispatch(deleteCat(id)),
  updateCat: (id, name) => dispatch(updateCat(id, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer);
