import React from 'react'
import styled from 'styled-components'
import { Wrapper, TitlePanel, Title, SubTitle, Body } from '../welcome/Welcome'

// LOCAL STYLES
const Code = styled.span`
  background: #e8e8e8;
  padding: 2px 4px;
  color: darkred;
`


// COMPONENT
export default () => {
  return (
    <Wrapper>
      <TitlePanel>
        <Title>Code Snippets</Title>
        <SubTitle>A collection of useful code</SubTitle>
      </TitlePanel>

      <Body>This will contain snippets like npm install commands or config lines so I can reference small deatils</Body>
      <Body>An example can be setting up <Code>webpack.config</Code> for sass</Body>
    </Wrapper>
  )
}
