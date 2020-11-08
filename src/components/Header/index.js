import React from 'react'

import { HeaderContainer, Logo } from './styles'

import webmotors from './../../styles/images/webmotors.png'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={webmotors} />
    </HeaderContainer>
  )
}

export default Header
