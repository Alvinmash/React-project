import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(NavLink)`
  color: white;
  font-size: 20px;
  text-align: left;
  text-decoration: none;
  &:hover {
    color: magenta;
  }
`

export default () => (
  <Link to="/">&lt;&lt; Go Home</Link>
)
