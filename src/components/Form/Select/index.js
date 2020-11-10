import React, { useState } from 'react'

import {
  SelectContainer,
  SelectButton,
  Label,
  Value,
  IconContainer,
  Icon,
  PlaceContainer,
  OptionsContainer,
  Option
} from './styles'

const Select = ({
  placeholder,
  options,
  selected,
  onChange,
  label,
  description
}) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleOnChange = selected => {
    onChange && onChange(selected)
    setShowOptions(false)
  }

  const handleDisplayLabel = selected => {
    const findSelectedOption = options.find(item => {
      return item.value === selected
    })
    return findSelectedOption ? findSelectedOption.label : ''
  }

  return (
    <SelectContainer>
      <SelectButton onClick={() => setShowOptions(!showOptions)}>
        {selected ? (
          <>
            <Label>{label}: </Label>
            <Value>
              {handleDisplayLabel(selected)} {description}
            </Value>
            <IconContainer>
              <Icon />
            </IconContainer>
          </>
        ) : (
          <>
            <PlaceContainer>
              <Label>{placeholder}</Label>
            </PlaceContainer>
            <IconContainer>
              <Icon />
            </IconContainer>
          </>
        )}
      </SelectButton>

      {Array.isArray(options) && options.length > 0 && (
        <OptionsContainer isVisible={showOptions}>
          {options.map(item => {
            return (
              <Option
                key={item.value}
                onClick={() => handleOnChange(item)}
                currentOption={selected === item.value}>
                {item.label}
              </Option>
            )
          })}
        </OptionsContainer>
      )}
    </SelectContainer>
  )
}

export default Select
