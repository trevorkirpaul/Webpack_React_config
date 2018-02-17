import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// STYLES
const Wrapper = styled.nav`
  display: flex;
  margin: 10px;
  padding: 15px;
`;
const Button = styled(Link)`
  text-decoration: none;
  background: #383838;
  color: #f8f8f8;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    color: paleturquoise;
  }

  margin-right: 5px;
`;

export default () => {
  return (
    <Wrapper>
      <Button to="/">Welcome</Button>
      <Button to="/snippets">Snippets</Button>
      <Button to="/add-cat">Add Cat</Button>
    </Wrapper>
  );
};
