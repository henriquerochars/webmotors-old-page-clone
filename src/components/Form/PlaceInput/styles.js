import styled from 'styled-components'

export const PlaceInputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
`

export const PlaceContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5px;
  width: 76%;
  border: 1px solid #ddd;
  border-right: none;
  border-radius: 5px 0 0 5px;
`

export const DistanceContainer = styled.div`
  flex: 0 1;
`

export const IconContainer = styled.div`
  flex: 0 0 25px;
  width: 25px;
  vertical-align: middle;
`

export const LabelContainer = styled.div`
  flex: 0 1;
`

export const InputContainer = styled.div`
  flex: 1;
`

export const Icon = styled.div`
  height: 17px;
  width: 17px;
  background-size: cover;
  background-image: url('${props => props.icon}');
`

export const Label = styled.div`
  color: #999;
  font-size: 14px;
`

export const Input = styled.input`
  height: 25px;
  width: 100%;
  outline: none;
  border: none;
  font-family: inherit;
  font-weight: bold;
  padding-left: 5px;
  color: #555;
`
