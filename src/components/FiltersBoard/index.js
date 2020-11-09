import React, { useState } from 'react'

import Checkbox from './../Form/Checkbox'

import {
  FiltersBoardContainer,
  FiltersBoardRow,
  FiltersBoardCol
} from './styles'

const FiltersBoard = () => {
  const [checkNewCars, setCheckNewCars] = useState(false)
  const [checkUsedCars, setCheckUsedCars] = useState(false)

  const handleCheckBox = (value, checkboxType) =>
    checkboxType === 'new' ? setCheckNewCars(value) : setCheckUsedCars(value)

  return (
    <FiltersBoardContainer>
      <FiltersBoardRow>
        <Checkbox
          title="Novos"
          checked={checkNewCars}
          onClick={() => handleCheckBox(!checkNewCars, 'new')}
        />
        <Checkbox
          title="Usados"
          checked={checkUsedCars}
          onClick={() => handleCheckBox(!checkUsedCars, 'used')}
        />
      </FiltersBoardRow>
    </FiltersBoardContainer>
  )
}

export default FiltersBoard
