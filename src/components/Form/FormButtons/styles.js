import styled from 'styled-components'

export const FormButtonContainer = styled.div`
  display: flex;
  padding-right: 15px;

  @media (max-width: 630px) {
    margin-top: 15px;
  }
`

export const FormButtonRow = styled.div`
  display: flex;
  flex: 1;
`

export const FormButtonCol = styled.div`
  display: flex;
  flex: 1;
  padding: 0 6px;
  text-align: right;

  ${props => {
    if (props.dinamicStyle) {
      return `& {
        ${props.dinamicStyle}
      }`
    }
  }}
`

export const Link = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
  transition: 0.3s;
  color: #999;

  &:hover,
  &:focus {
    color: #bbb;
  }
`

export const OfferButton = styled.button`
  cursor: pointer;
  background-color: #a33;
  color: #ffff;
  padding: 15px;
  font-size: 18px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
`
