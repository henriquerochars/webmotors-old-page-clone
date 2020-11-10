import React from 'react'

import { CheckboxButton, Box, Check, CheckboxLabel } from './styles'

const CheckBox = ({ onClick, title, checked }) => {
  return (
    <CheckboxButton onClick={onClick} checked={checked}>
      <Box>{checked && <Check />}</Box>
      <CheckboxLabel>{title}</CheckboxLabel>
    </CheckboxButton>
  )
}

export default CheckBox
