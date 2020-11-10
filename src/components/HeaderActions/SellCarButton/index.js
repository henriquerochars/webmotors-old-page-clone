import React from 'react'

import { SellButtonContainer, OutlineButton } from '../button-styles'

const content = {
  title: 'Vender meu carro'
}

const SellCarButton = ({ isVisible }) => {
  return (
    <SellButtonContainer>
      <OutlineButton customStyle={false} isVisible={isVisible}>
        {content.title}
      </OutlineButton>
    </SellButtonContainer>
  )
}

export default SellCarButton
