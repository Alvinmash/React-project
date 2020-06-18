import React from 'react'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Title from '../components/Title'
import GoHome from '../components/GoHome'

export default () => (
  <Page>
    <Title />
    <GoHome />
    <NotFound message="Sorry, looks like the page you are looking for does not exist." />
  </Page>
)
