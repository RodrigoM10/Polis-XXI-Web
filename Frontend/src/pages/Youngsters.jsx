import React from 'react'
import { Container } from 'react-bootstrap'
import { CardsYoungsters } from '../components/cardsAxes/CardsYoungsters'
import { AXES_INFO_YOUNGSTERS } from '../mocks/axesInfoYoungstersMock'

function Youngsters() {

    return (
        <Container >
            <h2 className='text-center my-4 title-axes'>
                JÓVENES
            </h2>
            <CardsYoungsters
                infoAxesYoungsters={AXES_INFO_YOUNGSTERS}
            />
        </Container>
    )
}

export default Youngsters
