import React from 'react'

import {
  Container,
  Button,
  CarIcon,
  LabelsContainer,
  SubtitleLabel,
  TitleLabel
} from '../button-styles'

const content = {
  subtitle: 'comprar',
  title: 'MOTOS'
}

const CarButtonTab = ({ active, onClick }) => {
  return (
    <Container>
      <Button active={active} onClick={onClick}>
        <CarIcon />
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

export default CarButtonTab
