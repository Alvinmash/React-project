import React from 'react'
import styled from 'styled-components'
import { typeColors } from '../public/javascript/typeTextColor'

const TypeName = styled.li`
  ${({ name }) => `
    color: ${typeColors[name]};
  `}
  
  font-size: 20px;
`

const TypePage = styled.div`
  margin-bottom: 20px;
`

const TypeUl = styled.ul`
  margin-left: -205px;
`

export default ({ typesList }) => (
  <TypePage>
    <TypeUl>Types:</TypeUl>
    {
      typesList.map(type => <TypeName key={type.id} name={type.name}>{`${type.name}`}</TypeName>)
    }
  </TypePage>
)
