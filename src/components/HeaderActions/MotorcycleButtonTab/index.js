import React from 'react'

import {
  Container,
  Button,
  MotorcycleIcon,
  LabelsContainer,
  SubtitleLabel,
  TitleLabel
} from '../button-styles'

const content = {
  subtitle: 'comprar',
  title: 'MOTOS'
}

const MotorcycleButtonTab = ({ active, onClick }) => {
  return (
    <Container>
      <Button active={active} onClick={onClick}>
        <MotorcycleIcon />
        <LabelsContainer>
          <div>
            <SubtitleLabel>{content.subtitle}</SubtitleLabel>
          </div>
          <TitleLabel className="dinamic-title">{content.title}</TitleLabel>
        </LabelsContainer>
      </Button>
    </Container>
  )
}

export default MotorcycleButtonTab
