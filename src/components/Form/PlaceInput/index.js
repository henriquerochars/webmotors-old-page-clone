import React, { useState } from 'react'
import localIcon from '../../../assets/images/local.png'

import Select from '../../Form/Select'

import {
  PlaceInputContainer,
  PlaceContainer,
  IconContainer,
  LabelContainer,
  InputContainer,
  DistanceContainer,
  Label,
  Icon,
  Input
} from './styles'

const PlaceInput = () => {
  const [perimeter, setPerimeter] = useState('')
  const [place, setPlace] = useState('')

  const handleOnChangePerimeter = option => {
    setPerimeter(option.value)
  }

  const handleOnChangePlace = option => {
    setPlace(option.value)
  }

  const mockOptions = [{ label: '100km', value: 1 }]

  return (
    <PlaceInputContainer>
      <PlaceContainer>
        <IconContainer>
          <Icon icon={localIcon} />
        </IconContainer>
        <LabelContainer>
          <Label>Onde:</Label>
        </LabelContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="Espírito Santo - ES"
            onChange={handleOnChangePlace}
            value={place}
          />
        </InputContainer>
      </PlaceContainer>
      <DistanceContainer>
        <Select
          placeholder="Raio:"
          label="Raio"
          selected={perimeter}
          onChange={handleOnChangePerimeter}
          options={mockOptions}
        />
      </DistanceContainer>
    </PlaceInputContainer>
  )
}

export default PlaceInput
