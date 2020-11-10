import React, { useState, useEffect } from 'react'

import Checkbox from './../Form/Checkbox'
import PlaceInput from './../Form/PlaceInput'
import Select from './../Form/Select'
import FormButtons from './../Form/FormButtons'
import LinkButton from './../Form/LinkButton'

import {
  FetchBrands,
  FetchModelsByMakeId,
  FetchVersionsByModelId
} from './../../services/webmotors-api'

import {
  FiltersBoardContainer,
  FiltersBoardRow,
  FiltersBoardCol,
  FormContainer
} from './styles'

const FiltersBoard = () => {
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
  const [prices, setPrices] = useState([])
  const [years, setYears] = useState([])

  const handleCheckBox = (value, checkboxType) =>
    checkboxType === 'new' ? setCheckNewCars(value) : setCheckUsedCars(value)

  const handleOnChangeYear = option => {
    setYear(option.value)
  }

  const handleOnChangeModel = async option => {
    setModel(option.value)
    setVersions(await FetchVersionsByModelId(option.value))
  }

  const handleOnChangeBrand = async option => {
    setBrand(option.value)
    setModels(await FetchModelsByMakeId(option.value))
  }

  const handleOnChangeVersion = option => {
    setVersion(option.value)
  }

  const handleOnChangePrice = option => {
    setPrice(option.value)
  }

  const handleClearFilters = () => {
    setBrand('')
    setModel('')
    setPrice('')
    setCheckUsedCars('')
    setYear('')
    setVersion('')
  }

  const content = {
    firstRow: [
      {
        label: 'Ano',
        placeholder: 'Ano Desejado',
        options: years,
        onChange: handleOnChangeYear,
        selected: year
      },
      {
        label: 'R$',
        placeholder: 'Faixa de Preço',
        options: prices,
        onChange: handleOnChangePrice,
        selected: price
      }
    ],
    secondRow: [
      {
        label: 'Marca',
        placeholder: 'Marca:',
        options: brands,
        onChange: handleOnChangeBrand,
        selected: brand
      },
      {
        label: 'Modelo',
        placeholder: 'Modelo:',
        options: models,
        onChange: handleOnChangeModel,
        selected: model
      }
    ],
    thirdRow: {}
  }

  useEffect(async () => {
    const fetchbrands = await FetchBrands()
    setBrands(fetchbrands)
    setPrices([
      { label: '10.000,00-20.000,00', value: 1 },
      { label: '20.000,00-30.000,00', value: 2 },
      { label: '30.000,00-40.000,00', value: 3 }
    ])
    setYears([
      { label: 2020, value: 1 },
      { label: 2019, value: 2 },
      { label: 2018, value: 3 }
    ])
  }, [])

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
        <FormContainer>
          <FiltersBoardRow>
            <FiltersBoardCol>
              <PlaceInput />
            </FiltersBoardCol>
          </FiltersBoardRow>

          <FiltersBoardRow>
            {content.firstRow.map((item, index) => (
              <FiltersBoardCol key={index}>
                <Select
                  placeholder={item.placeholder}
                  label={item.label}
                  onChange={item.onChange}
                  options={item.options}
                  selected={item.selected}
                />
              </FiltersBoardCol>
            ))}
          </FiltersBoardRow>
        </FormContainer>

        <FormContainer>
          <FiltersBoardRow>
            {content.secondRow.map((item, index) => (
              <FiltersBoardCol key={index}>
                <Select
                  placeholder={item.placeholder}
                  label={item.label}
                  onChange={item.onChange}
                  options={item.options}
                  selected={item.selected}
                />
              </FiltersBoardCol>
            ))}
          </FiltersBoardRow>
          <FiltersBoardRow>
            <FiltersBoardCol>
              <Select
                placeholder="Versão:"
                label="Versão"
                onChange={handleOnChangeVersion}
                options={versions}
                selected={version}
              />
            </FiltersBoardCol>
          </FiltersBoardRow>
        </FormContainer>
      </FiltersBoardRow>

      <FiltersBoardRow>
        <FiltersBoardCol>
          <LinkButton>Busca Avançada</LinkButton>
        </FiltersBoardCol>
        <FiltersBoardCol>
          <FormButtons
            onClickGetOffers={() => onSearch()}
            onClickClearFields={() => handleClearFilters()}
          />
        </FiltersBoardCol>
      </FiltersBoardRow>
    </FiltersBoardContainer>
  )
}

export default FiltersBoard
