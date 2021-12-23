import React from 'react'
import { CardAxes } from './CardAxes';

export const CardsInstitutions = ({infoAxesInstitutions}) => {

   const  mapCardsAxes = infoAxesInstitutions.map((infoCardAxes, i) => (<CardAxes key={i} infoCardAxes={infoCardAxes} />));

    return (
        <div className="row">
            {mapCardsAxes}
        </div>
    )
}