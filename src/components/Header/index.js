import React from 'react'

import { HeaderContainer, Logo } from './styles'

import webmotors from './../../assets/images/webmotors-logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={webmotors} />
    </HeaderContainer>
  )
}

export default Header
