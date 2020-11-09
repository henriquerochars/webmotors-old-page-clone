import styled from 'styled-components'
import { GiCityCar } from 'react-icons/gi'
import { FaMotorcycle } from 'react-icons/fa'

export const TabContainer = styled.div`
  display: flex;
  flex: 0 0 160px;
`

export const TabButton = styled.button`
  display: flex;
  flex: 1;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
  transition: 0.5s;

  ${props => {
    let dinamicClass = '&:hover, &:focus'
    if (props.active === true) dinamicClass = '&'
    return `
      ${dinamicClass} {
        border-bottom: 2px solid #b80000;
        
        .dinamic-title {
          color: #b80000;
        },

        .dinamic-icon {
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

export const LabelContainer = styled.div`
  text-align: left;
`

export const SubtitleLabel = styled.span`
  color: #999;
  font-size: 14px;
`

export const TitleLabel = styled.span`
  color: #999;
  font-size: 18px;
  font-weight: 500;
`

export const OutlineButton = styled.button`
  display: flex;
  cursor: pointer;
  color: #ff8c00;
  border: 2px solid #ff8c00;
  font-size: 1em;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px 32px;
  outline: none;
  background: none;
  transition: 0.5s;

  &:hover {
    background-color: #ff8c00;
    color: #ffffff;
  }

  @media (max-width: 515px) {
    display: none;
  }
`

export const SellButtonContainer = styled.div`
  padding-top: 4px;
`
