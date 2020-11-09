import styled from 'styled-components'

export const FiltersBoardContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 1px 1px 2px #aaa;
  padding: 30px 15px;
`

export const FiltersBoardRow = styled.div`
  @media (min-width: 630px) {
    display: flex;
    padding: 7px 0;
  }
`

export const FiltersBoardCol = styled.div`
  @media (min-width: 630px) {
    flex: 1;
    padding: 0 6px;
  }

  @media (max-width: 629px) {
    margin-bottom: 10px;
  }
`
