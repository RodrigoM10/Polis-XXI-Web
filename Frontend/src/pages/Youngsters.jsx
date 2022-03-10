import React from 'react'
import { Container } from 'react-bootstrap'
import { CardsYoungsters } from '../components/cardsAxes/CardsYoungsters'

function Youngsters() {

    let infoAxesYoungsters = [
        {
            id: 1,
            title: 'NOSOTROS',
            subtitle: '',
            position: '',
            text: 'Te mostramos un poco mas de nuestra biografía y sobre cada uno de nuestros integrantes',
            link:'/aboutUs'
        },
        {
            id: 2,
            title: 'PARTICIPACIÓN',
            subtitle: '',
            position: 'alt',
            text: 'Conocé las capacitaciones que se llevaron a cabo',
            link:'/participation' 
        },
        {
            id: 3,
            title: 'CALENDARIO EVENTOS',
            subtitle: '',
            position: '',
            text: 'Calendario mensual donde se visualizarán los eventos del mes',
            link:'/events'
        },
        {
            id: 4,
            title: 'SUMATE',
            subtitle: '',
            position: 'alt',
            text: 'Completa el formulario asi te actualizamos con la ultima información de nuestro portal',
            link:'/joinus'
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
