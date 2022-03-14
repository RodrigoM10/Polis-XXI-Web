import React from 'react'
import { Container } from 'react-bootstrap'
import CardsMain from '../components/cardsMain/CardsMain'
import { CARDS_INFO } from '../mocks/cardsInfoMock'

function Home() {
  
    return (
        <Container className="my-5 ">
            <CardsMain cardsInfo={CARDS_INFO} />
        </Container>
    )
}

export default Home
