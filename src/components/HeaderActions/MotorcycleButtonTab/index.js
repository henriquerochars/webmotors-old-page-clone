import React from 'react'

import {
  TabContainer,
  TabButton,
  MotorcycleIcon,
  LabelContainer,
  SubtitleLabel,
  TitleLabel
} from '../button-styles'

const content = {
  subtitle: 'comprar',
  title: 'MOTOS'
}

const MotorcycleButtonTab = ({ active, onClick }) => {
  return (
    <TabContainer>
      <TabButton active={active} onClick={onClick}>
        <MotorcycleIcon />
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

export default MotorcycleButtonTab
