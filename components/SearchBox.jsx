import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  font-size: 20px;
  border-radius: 8px;
  margin: 24px auto;
  outline: none;
  padding: 4px;
  width: 50%;
`

export default ({ term, setter }) => (
  <Input type="text" name="search" value={term} onChange={event => setter(event.target.value)} />
)
