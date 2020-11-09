import styled from 'styled-components'

export const CheckboxButton = styled.button`
  display: inline-block;
  vertical-align: top;
  padding-right: 30px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  ${props => {
    let dinamicClass = '&:hover'
    if (props.checked) dinamicClass = '&'

    return `
      ${dinamicClass} {
        div {
          color: #dc143c;
          border-color: #dc143c;
        }
      }
    `
  }}
`

export const Box = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin-right: 10px;
  margin-left: 10px;
  height: 18px;
  width: 18px;
  border-radius: 2px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: 0.3s;
`

export const Check = styled.div`
  background: #dc143c;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 12px;
  width: 12px;
  margin-top: -6px;
  margin-left: -6px;
  border-radius: 2px;
`

export const CheckboxLabel = styled.div`
  color: #666;
  display: inline-block;
  vertical-align: middle;
  line-height: 16px;
  font-size: 14px;
  transition: 0.3s;
`
