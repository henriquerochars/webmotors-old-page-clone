import React from 'react'

import { SellButtonContainer, OutlineButton } from '../button-styles'

const content = {
  title: 'Vender meu carro'
}

const SellCarButton = () => {
  return (
    <SellButtonContainer>
      <OutlineButton customStyle={false}>{content.title}</OutlineButton>
    </SellButtonContainer>
  )
}

export default SellCarButton
