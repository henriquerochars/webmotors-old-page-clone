import React from 'react'

import {
  TabContainer,
  TabButton,
  CarIcon,
  LabelContainer,
  SubtitleLabel,
  TitleLabel
} from '../button-styles'

const content = {
  subtitle: 'comprar',
  title: 'MOTOS'
}

const CarButtonTab = ({ active, onClick }) => {
  return (
    <TabContainer>
      <TabButton active={active} onClick={onClick}>
        <CarIcon />
        <LabelContainer>
          <div>
            <SubtitleLabel>{content.subtitle}</SubtitleLabel>
          </div>
          <TitleLabel className="dinamic-title">{content.title}</TitleLabel>
        </LabelContainer>
      </TabButton>
    </TabContainer>
  )
}

export default CarButtonTab
