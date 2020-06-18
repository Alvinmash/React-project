import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px auto 0;
  width: 80%;
`

export default ({ children }) => (
  <Page>{children}</Page>
)
