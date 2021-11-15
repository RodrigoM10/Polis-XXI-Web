import React from 'react'
import CardMain from './CardMain'

const CardsMain = ({ cardsInfo }) => {
   const  mapCardsMain = cardsInfo.map((cardInfo, i) => (<CardMain key={i} cardInfo={cardInfo} />));
    return (
        <div className="row row-cols-1 row-cols-3 align-items-center justify-content-around my-5">
            {mapCardsMain}
        </div>
    )
}

export default CardsMain
