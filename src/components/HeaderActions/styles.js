import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 4%;
`

export const HeaderColumn = styled.div`
  display: flex;
  flex: 1;

  ${props => {
    if (props.isFlexEnd)
      return `
      & {
        justify-content: flex-end;
      }
    `
  }}
`
