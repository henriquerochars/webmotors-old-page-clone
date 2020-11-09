import React, { useState } from 'react'
import { SelectContainer, SelectButton, ContainerLabel, Label } from './styles'
import * as S from './styles'

const Select = props => {
  const { placeholder, onChange, value, label, options, description } = props

  const [showOptions, setShowOptions] = useState(false)

  const _onChange = option => {
    onChange && onChange(option)
    setShowOptions(false)
  }

  const displayLabel = value => {
    const foundOption = options.find(op => {
      return op.value === value
    })

    return foundOption ? foundOption.label : ''
  }

  return (
    <SelectContainer>
      <SelectButton onClick={() => setShowOptions(!showOptions)}>
        {value ? (
          <>
            <ContainerLabel>
              <Label>{label}: </Label>
            </ContainerLabel>
            <S.containerValue>
              <S.value>
                {displayLabel(value)} {description}
              </S.value>
            </S.containerValue>
            <S.containerIcon>
              <S.icon />
            </S.containerIcon>
          </>
        ) : (
          <>
            <S.containerPlaceholder>
              <Label>{placeholder}</Label>
            </S.containerPlaceholder>
            <S.containerIcon>
              <S.icon />
            </S.containerIcon>
          </>
        )}
      </SelectButton>

      {Array.isArray(options) && (
        <S.containerOptions visible={showOptions} className="containerOptions">
          {options.map(op => {
            return (
              <S.option
                key={op.value}
                onClick={() => _onChange(op)}
                current={value === op.value}>
                {op.label}
              </S.option>
            )
          })}
        </S.containerOptions>
      )}
    </SelectContainer>
  )
}

export default Select
