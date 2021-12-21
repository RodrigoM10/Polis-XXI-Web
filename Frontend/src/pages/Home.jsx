import React from 'react'
import { FaEnvira, FaPeopleCarry, FaUserGraduate } from 'react-icons/fa'
import CardsMain from '../components/cardsMain/CardsMain'


function Home() {
    let cardsInfo = [
        {
            id: 1,
            title: 'JÓVENES',
            icon: <FaPeopleCarry />,
            link: '/youngsters',
            background: 'polis-color-lightblue',
            width: 'medium',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
        {
            id: 2,
            title: 'FORTALECIMIENTO INSTITUCIONAL',
            icon: <FaUserGraduate />,
            link: '/institutions',
            background: 'polis-color-violet',
            description: 'Conoce nuestra formacion institucional y academica',
            width: 'small',
            text: 'Trasparencia y rendición de cuentas, observatorio legislativo y vial.'
        },
        {
            id: 3,
            title: 'AMBIENTE',
            icon: <FaEnvira />,
            link: '/environment',
            background: 'polis-color-green',
            description: 'Nuestro entorno laboral',
            width: 'medium',
            text: 'Sumate a los proyectos, capacitaciones y aprovechá los recursos.'
        },
    ]
    
    return (
        <div className="my-5 ">
            <CardsMain cardsInfo={cardsInfo} />
        </div>
    )
}

export default Home
