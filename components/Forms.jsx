import React from 'react'
import styled from 'styled-components'

const FormName = styled.li`
  font-size: 20px;
  margin-bottom: 5px;
`

const FormPage = styled.div`
  margin-bottom: 20px;
`

const FormUl = styled.ul`
  margin-left: -200px;
`

export default ({ formsList }) => (
  <FormPage>
    <FormUl>Forms:</FormUl>
    {
      formsList.map(form => <FormName key={form.id}>{`${form.name}`}</FormName>)
    }
  </FormPage>
)
