import React from 'react'
import { Container } from 'react-bootstrap'
import CardUs from '../components/aboutUs/CardUs/CardUs'
import AboutUsDescription from '../components/description/AboutUsDescription'
import HeaderPages from '../components/headerPages/HeaderPages'
import { INFO_CARDS_US } from '../mocks/cardsInfoUsMock'

function AboutUs() {

    return (
        <div>
            <HeaderPages />
            <AboutUsDescription />
            <Container className='my-5'>
                <CardUs infoCardsUs={INFO_CARDS_US} />
            </Container>
        </div>
    )
};

export default AboutUs;
