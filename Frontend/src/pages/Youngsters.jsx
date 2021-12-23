import React from 'react'
import { Container } from 'react-bootstrap'
import { CardsYoungsters } from '../components/cardsAxes/CardsYoungsters'

function Youngsters() {

    let infoAxesYoungsters = [
        {
            id: 1,
            title: 'Nuestra Historia',
            subtitle: '',
            position: '',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
        {
            id: 2,
            title: 'Webinars',
            subtitle: '',
            position: 'alt',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
        {
            id: 3,
            title: 'Eventos',
            subtitle: '',
            position: '',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
        {
            id: 4,
            title: 'Agenda',
            subtitle: '',
            position: 'alt',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },

    ]


    return (
        <Container>
            <h2 className='text-center my-4 title-axes'>
                JÓVENES
            </h2>
            <CardsYoungsters
                infoAxesYoungsters={infoAxesYoungsters}
            />
        </Container>
    )
}

export default Youngsters
