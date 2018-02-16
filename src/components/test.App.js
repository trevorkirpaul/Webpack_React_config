import React, { Component } from 'react'
import styled from 'styled-components'

// STYLES
const Wrapper = styled.div`
  margin: 10px;
  padding: 15px;
`
const TitlePanel = styled.div`
  display: inline-block;
  border-bottom: 2px solid darkgreen;
  width: 50vw;
  margin-bottom: 15px;
`
const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 15px;
`
const SubTitle = styled.h3`
  margin-bottom: 15px;
`
const Body = styled.p`
  margin-bottom: 15px;
`
const List = styled.ul`
  list-style: none;
  margin-left: 15px;
  margin-bottom: 25px;
`
const ListItem = styled.li`
  &:before {
    content: '+ ';
    font-weight: 900;
    color: darkgreen;
    margin-right: 5px;
  }
  margin-bottom: 5px;
`

// COMPONENT
class App extends Component {
  render() {
    return (
      <Wrapper>
        <TitlePanel>
          <Title>React Boilerplate</Title>
          <SubTitle>Using Webpack</SubTitle>
        </TitlePanel>
        <Body>Including:</Body>    
        <List>
          <ListItem>Sass loaders</ListItem>
          <ListItem>Dev Server</ListItem>
          <ListItem>Clean Webpack Plugin</ListItem>
          <ListItem>HTML Webpack Plugin</ListItem>
          <ListItem>Styled Components</ListItem>
          <ListItem>Babel Class Transform Properties</ListItem>
        </List>
        <Body>To Do:</Body>
        <List>
          <ListItem>Redux</ListItem>
          <ListItem>React-Router</ListItem>
        </List>
      </Wrapper>
    )
  }
}

export default App