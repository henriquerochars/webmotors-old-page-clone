import React from 'react'

import { Container, Logo } from './styles'

import webmotors from './../../styles/images/webmotors.png'

const Header = () => {
  return (
    <Container>
      <Logo src={webmotors} />
    </Container>
  )
}

export default Header
