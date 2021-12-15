import React from 'react'
import { Container } from 'react-bootstrap'
import { FaEnvira, FaPeopleCarry, FaUserGraduate } from 'react-icons/fa'
import CardsMain from '../components/cardsMain/CardsMain'
import { TextMain } from '../components/textMain/TextMain'


function Home() {


let cardsInfo = [
    {
        id: 1,
        title: 'JÓVENES',
        icon: <FaPeopleCarry/>,
        link: '/youngsters',
        background: 'polis-color-lightblue',
       
    },
    {
        id: 2,
        title: 'FORTALECIMIENTO INSTITUCIONAL',
        icon: <FaUserGraduate/>,
        link: '/institutions',
        background: 'polis-color-violet',
        description:'Conoce nuestra formacion institucional y academica',
    },
    {
        id: 3,
        title: 'AMBIENTE',
        icon: <FaEnvira/>,
        link: '/environment',
        background:'polis-color-lightblue',
        description:'Nuestro entorno laboral',
    },
]
console.log(cardsInfo)
    return (
        <Container>
            <TextMain />
            <CardsMain cardsInfo={cardsInfo} />
        </Container>
    )
}

export default Home
