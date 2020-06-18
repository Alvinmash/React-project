import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Pokemon = styled.div`
  font-size: 20px;
  margin-top: 8px;
  text-align: center;
`

const Link = styled(NavLink)`
  color: white;   
  text-decoration: none;
  &:hover {
  color: magenta;
}
`

export default ({ name }) => (
  <Pokemon>
    <Link to={`/pokemon/${name}`}>{name}</Link>
  </Pokemon>
)
