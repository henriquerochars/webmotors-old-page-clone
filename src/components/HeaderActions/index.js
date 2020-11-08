import React, { useState } from 'react'

import CarButtonTab from './CarButtonTab'
import MotorcycleButtonTab from './MotorcycleButtonTab'

import { Container, Column } from './styles'

const HeaderActions = () => {
  const [vehicleType, setVehicleType] = useState('car')

  return (
    <Container>
      <Column>
        <CarButtonTab
          active={vehicleType === 'car'}
          onClick={() => setVehicleType('car')}
        />
        <MotorcycleButtonTab
          active={vehicleType === 'motorcycle'}
          onClick={() => setVehicleType('motorcycle')}
        />
      </Column>
    </Container>
  )
}

export default HeaderActions
