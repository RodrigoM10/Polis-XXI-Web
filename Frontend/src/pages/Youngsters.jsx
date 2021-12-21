import React from 'react'
import { CardsYoungsters } from '../components/cardsAxes/CardsYoungsters'

function Youngsters() {

let infoAxesYoungsters = [
    {
        id: 1,
        title: 'Nuestra Historia',
        subtitle: '',
        position: 'me-md-auto',
        text: 'Conocé nuestra historia, webinars, eventos y agenda.'
    },
    {
        id: 2,
        title: 'Webinars',
        subtitle: '',
        position: 'alt ms-md-auto',
        text: 'Conocé nuestra historia, webinars, eventos y agenda.'
    },
    {
        id: 3,
        title: 'Eventos',
        subtitle: '',
        position: 'me-md-auto',
        text: 'Conocé nuestra historia, webinars, eventos y agenda.'
    },
    {
        id: 4,
        title: 'Agenda',
        subtitle: '',
        position: 'alt ms-md-auto',
        text: 'Conocé nuestra historia, webinars, eventos y agenda.'
    },

]


    return (
        <div>
            JOVENES
         <CardsYoungsters 
         infoAxesYoungsters={infoAxesYoungsters}
         />
        </div>
    )
}

export default Youngsters
