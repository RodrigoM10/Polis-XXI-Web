import React from 'react'
import { CardsEnvironment } from '../components/cardsAxes/CardsEnvironment'

function Environment() {
    let infoAxesEnvironment = [
        {
            id: 1,
            title: 'Proyectos',
            subtitle: '',
            position: 'me-md-auto',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
        {
            id: 2,
            title: 'Capacitaciones',
            subtitle: '',
            position: 'alt ms-md-auto',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
        {
            id: 3,
            title: 'Recursos',
            subtitle: '',
            position: 'me-md-auto',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
    ]

    return (
        <div>
            AMBIENTE
            <CardsEnvironment 
            infoAxesEnvironment={infoAxesEnvironment}
            />
        </div>
    )
}

export default Environment
