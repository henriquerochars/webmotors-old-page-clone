import React, { useState } from 'react'
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
import Select from '../../Form/Select'

const PlaceInput = props => {
  const containerStyle = {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }

  const [distanceOptions, setDistanceOptions] = useState()
  const [city, setCity] = useState()

  const onChangeDistance = option => {
    setDistanceOptions(option.value)
  }

  const onChangeCity = option => {
    setCity(option.value)
  }

  return (
    <PlaceInputContainer>
      <PlaceContainer>
        <IconContainer>
          <Icon icon={props.icon} />
        </IconContainer>
        <LabelContainer>
          <Label>Onde:</Label>
        </LabelContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="São Paulo - SP"
            onChange={onChangeCity}
            value={city}
          />
        </InputContainer>
      </PlaceContainer>
      <DistanceContainer>
        <Select
          description={'Km'}
          containerStyle={containerStyle}
          placeholder="Raio"
          label="Raio"
          value={distanceOptions}
          onChange={onChangeDistance}
          options={props.mileages}
        />
      </DistanceContainer>
    </PlaceInputContainer>
  )
}

export default PlaceInput
