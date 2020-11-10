import styled from 'styled-components'

export const LinkButtonContainer = styled.button`
  color: #a33;
  cursor: pointer;
  padding: 5px;
  background: none;
  border: none;
  margin-top: 10px;

  &:hover,
  &:focus {
    color: #d33;
    span {
      border-color: #d33;
    }
  }
`

export const LinkButtonLabel = styled.div`
  display: inline-block;
  font-weight: bold;
  vertical-align: middle;
  padding-left: 10px;
  font-size: 14px;
`

export const LinkButtonSpan = styled.span`
  display: inline-block;
  border: 2px solid #a33;
  vertical-align: middle;
  border-left: none;
  border-bottom: none;
  width: 4px;
  height: 4px;
  transform: rotate(45deg);
  transition: 0.5s;

  &:hover {
    transform: rotate(135deg);
  }
`
