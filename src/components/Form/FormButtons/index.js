import React from 'react'

import {
  FormButtonContainer,
  FormButtonRow,
  FormButtonCol,
  Link,
  OfferButton
} from './styles'

const FormButtons = ({ onClickGetOffers, onClickClearFields }) => {
  const content = {
    clearFilters: 'Limpar Filtros',
    getOffers: 'Obter Ofertas'
  }

  return (
    <FormButtonContainer>
      <FormButtonRow>
        <FormButtonCol dinamicStyle="flex: 0 0 100px">
          <Link onClick={onClickClearFields}>{content.clearFilters}</Link>
        </FormButtonCol>
        <FormButtonCol>
          <OfferButton onClick={onClickGetOffers}>
            {content.getOffers}
          </OfferButton>
        </FormButtonCol>
      </FormButtonRow>
    </FormButtonContainer>
  )
}

export default FormButtons
