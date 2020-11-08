import styled from 'styled-components'
import { GiCityCar } from 'react-icons/gi'
import { FaMotorcycle } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex: 0 0 160px;
`

export const Button = styled.button`
  display: flex;
  flex: 1;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
  transition: 0.3s;

  ${props => {
    let dinamicClass = '&:hover, &:focus'
    if (props.active === true) dinamicClass = '&'
    return `
      ${dinamicClass} {
        border-bottom: 2px solid #b80000;
        
        .dinamic-title {
          color: #b80000;
        },
      }
    `
  }};
`

export const CarIcon = styled(GiCityCar)`
  display: flex;
  flex: 0 0 70px;
  justify-content: center;
  align-self: flex-end;
  height: 45px;
`

export const MotorcycleIcon = styled(FaMotorcycle)`
  display: flex;
  flex: 0 0 70px;
  justify-content: center;
  align-self: flex-end;
  height: 32px;
  margin-bottom: 6px;
`

export const LabelsContainer = styled.div`
  text-align: left;
`

export const SubtitleLabel = styled.span`
  text-align: left;
  font-size: 14px;
  color: #999;
`

export const TitleLabel = styled.span`
  font-size: 18px;
  color: #999;
  font-weight: 500;
`

export const OutlineButton = styled.button`
  display: flex;
  color: #ff8c00;
  border: 2px solid #ff8c00;
  font-size: 1em;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 4px;
  outline: none;
  background: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ff8c00;
    color: #ffffff;
  }

  @media (max-width: 515px) {
    display: none;
  }
`

export const SellButtonContainer = styled.div`
  justify-content: flex-end;
  padding-top: 4px;
`
