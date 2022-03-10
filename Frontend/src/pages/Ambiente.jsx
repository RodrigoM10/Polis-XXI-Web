import React from 'react'
import { Container } from 'react-bootstrap'
import { CardsEnvironment } from '../components/cardsAxes/CardsEnvironment'

function Ambiente() {
    let infoAxesEnvironment = [
        {
            id: 1,
            title: 'Proyectos',
            subtitle: '',
            position: '',
            text: 'Conocé los proyectos en curso y los que propondremos en todo este año'
        },
        {
            id: 2,
            title: 'Notas',
            subtitle: '',
            position: 'alt',
            text: 'Notas con mucha información.'
        },
        {
            id: 3,
            title: 'Normativa',
            subtitle: '',
            position: ' ',
            text: 'Conocé las regulaciones, leyes y normas que rigen la realización de los proyectos de caracter ambiental'
        },
        {
            id: 4,
            title: 'Formación',
            subtitle: '',
            position: ' ',
            text: 'Enterate de los cursos, talleres y webinars que tenemos para seguir formandote en el área.'
        },
    ]

    return (
        <Container>
            <h2 className='text-center my-4 title-axes'>
                AMBIENTEtttttte
            </h2>
            <CardsEnvironment infoAxesEnvironment={infoAxesEnvironment}
            />
        </Container>
    )
}

export default Ambiente;