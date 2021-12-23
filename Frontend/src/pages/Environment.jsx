import React from 'react'
import { Container } from 'react-bootstrap'
import { CardsEnvironment } from '../components/cardsAxes/CardsEnvironment'

function Environment() {
    let infoAxesEnvironment = [
        {
            id: 1,
            title: 'Proyectos',
            subtitle: '',
            position: '',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
        {
            id: 2,
            title: 'Capacitaciones',
            subtitle: '',
            position: 'alt',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
        {
            id: 3,
            title: 'Recursos',
            subtitle: '',
            position: ' ',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
    ]

    return (
        <Container>
            <h2 className='text-center my-4 title-axes'>
                AMBIENTE
            </h2>
            <CardsEnvironment
                infoAxesEnvironment={infoAxesEnvironment}
            />
        </Container>
    )
}

export default Environment
