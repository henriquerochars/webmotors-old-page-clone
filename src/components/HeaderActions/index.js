import React, { useState } from 'react'

import CarButtonTab from './CarButtonTab'
import MotorcycleButtonTab from './MotorcycleButtonTab'
import SellCarButton from './SellCarButton'

import { HeaderContainer, HeaderColumn } from './styles'

const HeaderActions = () => {
  const [vehicleType, setVehicleType] = useState('car')

  return (
    <HeaderContainer>
      <HeaderColumn>
        <CarButtonTab
          active={vehicleType === 'car'}
          onClick={() => setVehicleType('car')}
        />
        <MotorcycleButtonTab
          active={vehicleType === 'motorcycle'}
          onClick={() => setVehicleType('motorcycle')}
        />
      </HeaderColumn>
      <HeaderColumn isFlexEnd={true}>
        <SellCarButton isVisible={false} />
      </HeaderColumn>
    </HeaderContainer>
  )
}

export default HeaderActions
