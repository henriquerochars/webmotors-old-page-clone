import React from 'react'

import { LinkButtonContainer, LinkButtonSpan, LinkButtonLabel } from './styles'

const LinkButton = ({ children }) => {
  return (
    <LinkButtonContainer>
      <LinkButtonSpan />
      <LinkButtonLabel>{children}</LinkButtonLabel>
    </LinkButtonContainer>
  )
}

export default LinkButton
