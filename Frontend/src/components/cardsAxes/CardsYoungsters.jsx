import React from 'react'
import { CardAxes } from './CardAxes';

export const CardsYoungsters = ({infoAxesYoungsters}) => {

   const  mapCardsAxes = infoAxesYoungsters.map((infoCardAxes, i) => (<CardAxes key={i} infoCardAxes={infoCardAxes} />));

    return (
        <div>
            {mapCardsAxes}
        </div>
    )
}
