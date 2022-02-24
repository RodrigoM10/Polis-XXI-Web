import React from 'react'
import { Container } from 'react-bootstrap'
import { CardsYoungsters } from '../components/cardsAxes/CardsYoungsters'

function Youngsters() {

    let infoAxesYoungsters = [
        {
            id: 1,
            title: 'Nosotros',
            subtitle: '',
            position: '',
            text: 'Te mostramos un poco mas de nuestra biografía y sobre cada uno de nuestros integrantes'
        },
        {
            id: 2,
            title: 'Participación',
            subtitle: '',
            position: 'alt',
            text: 'Conocé las capacitaciones que se llevaron a cabo'
        },
        {
            id: 3,
            title: 'Calendario Eventos',
            subtitle: '',
            position: '',
            text: 'Calendario mensual donde se visualizarán los eventos del mes'
        },
        {
            id: 4,
            title: 'Sumate',
            subtitle: '',
            position: 'alt',
            text: 'Completa el formulario asi te actualizamos con la ultima información de nuestro portal'
        },

    ]


    return (
        <Container >
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
