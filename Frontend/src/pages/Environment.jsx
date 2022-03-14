import React from 'react'
import { Container } from 'react-bootstrap'
import { CardsEnvironment } from '../components/cardsAxes/CardsEnvironment'
import { AXES_INFO_INVIRONMENT } from '../mocks/axesInfoInvironment'

function Environment() {
    
    return (
        <Container >
            <h2 className='text-center my-4 title-axes'>
                AMBIENTE
            </h2>
            <CardsEnvironment infoAxesEnvironment={AXES_INFO_INVIRONMENT}
            />
        </Container>
    )
}

export default Environment;