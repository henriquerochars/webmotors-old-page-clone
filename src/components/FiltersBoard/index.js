import React, { useState } from 'react'
import Image from '../../assets/images/local.png'

import Checkbox from './../Form/Checkbox'
import PlaceInput from './../Form/PlaceInput'
import Select from './../Form/Select'
import ButtonsForm from './../Form/ButtonsForm'
import TogglerLink from './../Form/TogglerLink'

import {
  FiltersBoardContainer,
  FiltersBoardRow,
  FiltersBoardCol,
  FormContainer
} from './styles'

const FiltersBoard = props => {
  const [checkNewCars, setCheckNewCars] = useState(false)
  const [checkUsedCars, setCheckUsedCars] = useState(false)
  const [year, setYear] = useState()
  const [model, setModel] = useState()
  const [brand, setBrand] = useState()
  const [version, setVersion] = useState()
  const [price, setPrice] = useState()
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  const [versions, setVersions] = useState([])
  const [prices, setPrices] = useState([
    { label: '20000,00-40000,00', value: 1 },
    { label: '400000,00-60000,00', value: 2 },
    { label: '600000,00-80000,00', value: 3 }
  ])
  const [years, setYears] = useState([
    { label: 2020, value: 1 },
    { label: 2019, value: 2 },
    { label: 2018, value: 3 },
    { label: 2017, value: 4 },
    { label: 2016, value: 5 },
    { label: 2015, value: 6 }
  ])
  const handleCheckBox = (value, checkboxType) =>
    checkboxType === 'new' ? setCheckNewCars(value) : setCheckUsedCars(value)

  const onChangeYear = option => {
    setYear(option.value)
  }

  const onChangeModel = option => {
    setModel(option.value)
    FetchVersions(option.value)
  }

  const onChangeBrand = option => {
    setBrand(option.value)
    FetchModels(option.value)
  }

  const onChangeVersion = option => {
    setVersion(option.value)
  }

  const onChangePrice = option => {
    setPrice(option.value)
  }

  const ClearData = () => {
    setBrand('')
    setModel('')
    setPrice('')
    setCheckUsedCars('')
    setYear('')
    setVersion('')
  }

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
      <FiltersBoardRow>
        <FormContainer className="containerItems">
          <FiltersBoardRow>
            <FiltersBoardCol>
              <PlaceInput
                city={'São Paulo - SP'}
                mileages={props.mileages}
                icon={Image}
              />
            </FiltersBoardCol>
          </FiltersBoardRow>

          <FiltersBoardRow>
            <FiltersBoardCol>
              <Select
                placeholder="Ano Desejado"
                label="Ano"
                onChange={onChangeYear}
                options={years}
                value={year}
              />
            </FiltersBoardCol>

            <FiltersBoardCol>
              <Select
                key={prices.value}
                placeholder="Faixa de Preço"
                label="R$"
                onChange={onChangePrice}
                options={prices}
                value={price}
              />
            </FiltersBoardCol>
          </FiltersBoardRow>
        </FormContainer>

        <FormContainer className="containerItems">
          <FiltersBoardRow>
            <FiltersBoardCol>
              <Select
                label="Marca"
                placeholder="Marca:"
                value={brand}
                options={brands}
                onChange={onChangeBrand}
              />
            </FiltersBoardCol>

            <FiltersBoardCol>
              <Select
                label="Modelo"
                onChange={onChangeModel}
                options={models}
                value={model}
                placeholder="Modelo:"
              />
            </FiltersBoardCol>
          </FiltersBoardRow>
          <FiltersBoardRow>
            <FiltersBoardCol>
              <Select
                placeholder="Versão:"
                label="Versão"
                onChange={onChangeVersion}
                options={versions}
                value={version}
              />
            </FiltersBoardCol>
          </FiltersBoardRow>
        </FormContainer>
      </FiltersBoardRow>

      <FiltersBoardRow>
        <FiltersBoardCol>
          <TogglerLink>Busca Avançada</TogglerLink>
        </FiltersBoardCol>
        <FiltersBoardCol>
          <ButtonsForm
            onClickSearch={() => onSearch()}
            onClickClear={() => ClearData()}
          />
        </FiltersBoardCol>
      </FiltersBoardRow>
    </FiltersBoardContainer>
  )
}

export default FiltersBoard
