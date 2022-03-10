import React from 'react'
import { CardAxes } from './CardAxes';

export const CardsEnvironment = ({infoAxesEnvironment}) => {
   const  mapCardsAxes =infoAxesEnvironment.map((infoCardAxes, i) => (<CardAxes key={i} infoCardAxes={infoCardAxes} />));

    return (
        <div className='row'>
            {mapCardsAxes}
        </div>
    )
}