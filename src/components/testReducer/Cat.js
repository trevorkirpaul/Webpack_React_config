import React from 'react';
import styled from 'styled-components';
import { Wrapper, TitlePanel, Title, SubTitle, Body } from '../welcome/Welcome';

const FieldWrapper = styled.div`
  margin-bottom: 15px;
`;
const Input = styled.input`
  display: inline-block;
  border: none;
  border-bottom: 2px solid darkgreen;
  background: #e8e8e8;
  color: #383838;
  padding: 5px 10px;
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background: #383838;
  color: #f8f8f8;

  &:hover {
    cursor: pointer;
  }
`;

export default ({ handleOnChange, handleSubmit, name, color }) => {
  return (
    <Wrapper>
      <TitlePanel>
        <Title>Test Animals Reducer</Title>
        <SubTitle>Add Cat</SubTitle>
      </TitlePanel>
      <Body>Complete the following fields to add a cat to redux state</Body>
      <FieldWrapper>
        <Input
          type="text"
          placeholder="Cat Name"
          name="name"
          value={name}
          onChange={handleOnChange}
        />
        <Input
          type="text"
          placeholder="Color"
          name="color"
          value={color}
          onChange={handleOnChange}
        />
      </FieldWrapper>
      <SubmitButton onClick={handleSubmit}>Create Cat</SubmitButton>
    </Wrapper>
  );
};
