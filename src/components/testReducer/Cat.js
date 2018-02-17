import React from 'react';
import styled from 'styled-components';
import { Wrapper, TitlePanel, Title, SubTitle, Body } from '../welcome/Welcome';

const FieldWrapper = styled.div`
  margin-bottom: 15px;
`;
const ActionWrapper = styled.div`
  margin-bottom: 35px;
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

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
`;
const ListItem = styled.li`
  margin: 10px;
  padding: 25px;
  background: #e8e8e8;
  display: inline-block;
`;
const ListDetails = styled.div`
  margin-bottom: 15px;
`;

export default ({ handleOnChange, handleDelete, handleSubmit, name, cats }) => {
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
      </FieldWrapper>
      <ActionWrapper>
        <SubmitButton onClick={handleSubmit}>Create Cat</SubmitButton>
      </ActionWrapper>

      <TitlePanel>
        <Title>All Cats</Title>
        <SubTitle>A list of all cats</SubTitle>
      </TitlePanel>

      <List>
        {cats &&
          cats.map(cat => (
            <ListItem key={cat.id}>
              <ListDetails>
                <SubTitle>{cat.name}</SubTitle>
                <p>Created: {cat.created_at}</p>
              </ListDetails>
              <SubmitButton onClick={() => handleDelete(cat.id)}>
                Delete
              </SubmitButton>
            </ListItem>
          ))}
      </List>
    </Wrapper>
  );
};
