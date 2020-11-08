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
