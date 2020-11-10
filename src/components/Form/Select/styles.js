import styled from 'styled-components'
import downArrowIcon from '../../../assets/images/down-arrow.png'

export const SelectContainer = styled.div`
  display: flex;
  position: relative;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 35px;

  &:hover {
    border: 1px solid #aaa;
  }
`

export const SelectButton = styled.button`
  display: flex;
  flex: 1;
  cursor: pointer;
  padding: 8px 5px;
  background: none;
  outline: none;
  border: none;
  text-align: left;
`

export const Label = styled.div`
  flex: 0 1;
  color: #999;
  white-space: nowrap;
  font-size: 14px;
`

export const Value = styled.div`
  flex: 1;
  padding: 0 7px;
  color: #555;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
`

export const IconContainer = styled.div`
  flex: 0 0 15px;
  width: 15px;
  align-self: center;
  text-align: right;
`

export const Icon = styled.div`
  display: inline-block;
  width: 7px;
  height: 7px;
  background-size: contain;
  background-image: url('${downArrowIcon}');
`

export const PlaceContainer = styled.div`
  flex: 1;
`

export const OptionsContainer = styled.div`
  position: absolute;
  display: none;
  width: 100%;
  top: 100%;
  left: 0;
  max-height: 200px;
  border: 1px solid #ddd;
  background: #fff;
  overflow-y: auto;
  z-index: 100;

  ${props => {
    if (props.isVisible) {
      return `
        display: block;
      `
    }
  }}
`

export const Option = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  text-align: left;
  color: #666;
  background: none;
  border: none;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #eee;
  }

  ${props => {
    if (props.currentOption) {
      return `
        background: #f4f4f4;
      `
    }
  }}
`
