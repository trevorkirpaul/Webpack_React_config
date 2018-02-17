import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

// styles

const style = {
  overlay: {
    border: 'none',
  },
  content: {
    border: 'none',
    background: '#383838',
    color: '#f8f8f8',
  },
};

const TitlePanel = styled.div`
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 15px;
`;
const SubTitle = styled.h3`
  color: #e8e8e8;
`;

const Input = styled.input`
  display: inline-block;
  border: none;
  background: #e8e8e8;
  color: #383838;
  padding: 5px 10px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background: #ffc107;
  color: #383838;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const CancelButton = Button.extend`
  background: #b71c1c;
  color: #f8f8f8;
`;

// MODAL
export default ({
  isOpen,
  afterOpen,
  reqClose,
  title,
  subtitle,
  catName,
  handleOnChange,
  newName,
  handleUpdate,
}) => (
  <Modal
    isOpen={isOpen}
    onAfterOpen={afterOpen}
    onRequestClose={reqClose}
    contentLabel="Modal"
    ariaHideApp={false}
    style={style}
  >
    <TitlePanel>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </TitlePanel>

    <TitlePanel>
      <Input
        type="text"
        name="newName"
        value={newName}
        onChange={handleOnChange}
        placeholder={catName}
      />
    </TitlePanel>
    <div>
      <Button onClick={handleUpdate}>Submit</Button>
      <CancelButton onClick={reqClose}>Cancel</CancelButton>
    </div>
  </Modal>
);
