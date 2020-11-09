import React from 'react'
import styled from 'styled-components'

import GlobalStyles from './styles/global'

import Header from './components/Header'
import HeaderActions from './components/HeaderActions'
import FiltersBoard from './components/FiltersBoard'

const AppContainer = styled.div`
  @media (min-width: 933px) {
    width: 933px;
    margin: auto;
  }
`

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <HeaderActions />
        <FiltersBoard />
      </AppContainer>

      <GlobalStyles />
    </>
  )
}

export default App
