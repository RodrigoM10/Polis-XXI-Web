import React from 'react'
import { Container } from 'react-bootstrap'
import { CardsEnvironment } from '../components/cardsAxes/CardsEnvironment'

function Environment() {
    let infoAxesEnvironment = [
        {
            id: 1,
            title: 'PROYECTOS',
            subtitle: '',
            position: '',
            text: 'Se muestran en detalle los proyectos creados por nosotros',
            link:'/environment/proyects'
        },
        {
            id: 2,
            title: 'NOTAS',
            subtitle: '',
            position: 'alt',
            text: 'Conocé las notas que hemos hecho',
            link:'notes' 
        },
        {
            id: 3,
            title: 'NORMATIVA',
            subtitle: '',
            position: '',
            text: 'Las normas y regulaciones que rigen en nuestro pais con respecto al medio ambiente',
            link:'/normative'
        },
        {
            id: 4,
            title: 'FORMACIÓN',
            subtitle: '',
            position: 'alt',
            text: 'Conoce los cursos de formacion profesional, talleres y webinars',
            link:'/formation'
        },

    ]


    return (
        <Container >
            <h2 className='text-center my-4 title-axes'>
                AMBIENTE
            </h2>
            <CardsEnvironment
                infoAxesEnvironment={infoAxesEnvironment}
            />
        </Container>
    )
}

export default Environment;