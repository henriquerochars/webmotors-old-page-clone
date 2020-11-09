import styled from 'styled-components'
import iconImage from '../../../assets/images/downArrow.png'

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
  background: none;
  padding: 8px 5px;
  border: none;
  outline: none;
  text-align: left;
`

export const ContainerLabel = styled.div`
  flex: 0 1;
`

export const containerOptions = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;

  ${props => {
    if (props.visible) {
      return `
        display: block;
      `
    }

    return ``
  }}
`

export const containerPlaceholder = styled.div`
  flex: 1;
`

export const containerValue = styled.div`
  flex: 1;
  padding: 0 7px;
`

export const containerIcon = styled.div`
  flex: 0 0 15px;
  width: 15px;
  text-align: right;
  align-self: center;
`

export const icon = styled.div`
  display: inline-block;
  width: 7px;
  height: 7px;
  background-image: url('${iconImage}');
  background-size: contain;
`

export const Label = styled.div`
  color: #999;
  font-size: 14px;
  white-space: nowrap;
`

export const value = styled.div`
  color: #555;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
`

export const option = styled.button`
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
    if (props.current) {
      return `
        background: #f4f4f4;
      `
    }

    return ``
  }}
`
