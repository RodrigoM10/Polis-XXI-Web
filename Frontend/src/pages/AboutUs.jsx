import React from 'react'
import { Container } from 'react-bootstrap'
import maroñas from '../assets/AboutUs/Abel-Maroñas.jpg'
import Alfonzo from '../assets/AboutUs/Celeste-Alfonzo.jpg'
import Giudice from '../assets/AboutUs/GiudiceMatias.jpeg'
import Perpetua from '../assets/AboutUs/Joel-Perpetua.jpg'
import Moreno from '../assets/AboutUs/Nora-Moreno.jpg'
import Pereyra from '../assets/AboutUs/Pereyra.jpg'
import Saraceno from '../assets/AboutUs/Santiago-Saraceno.jpg'
import Torrico from '../assets/AboutUs/Torrico.jpg'
import CardUs from '../components/aboutUs/CardUs/CardUs'
import AboutUsDescription from '../components/aboutUs/aboutUsDescription'

function AboutUs() {

    let infoCardsUs = [
        {
            id: 1,
            name: 'Abel Moraños',
            title: "Abogado",
            img: maroñas,
            linkedin_link: "https://www.linkedin.com"
        },
        {
            id: 2,
            name: 'Celeste Alfonzo',
            title: "Abogado",
            img: Alfonzo,
            linkedin_link: "https://www.linkedin.com"
        },
        {
            id: 3,
            name: 'Matias Giudice',
            title: "Abogado",
            img: Giudice,
            linkedin_link: "https://www.linkedin.com"
        },
        {
            id: 4,
            name: 'Joel Perpetua',
            title: "Abogado",
            img: Perpetua,
            linkedin_link: "https://www.linkedin.com"
        },
        {
            id: 5,
            name: 'Nora Moreno',
            title: "Abogado",
            img: Moreno,
            linkedin_link: "https://www.linkedin.com"
        },
        {
            id: 6,
            name: 'Lautaro Pereyra Ramirez',
            title: "Abogado",
            img: Pereyra,
            linkedin_link: "https://www.linkedin.com"
        },
        {
            id: 7,
            name: 'Santiago Saraceno',
            title: "Abogado",
            img: Saraceno,
            linkedin_link: "https://www.linkedin.com"
        },
        {
            id: 8,
            name: 'Torrico',
            title: "Abogado",
            img: Torrico,
            linkedin_link: "https://www.linkedin.com"
        },
    ];



    return (
        <div>
            <AboutUsDescription />
            <Container className='my-5'>
                <CardUs infoCardsUs={infoCardsUs} />
            </Container>
        </div>
    )
};

export default AboutUs;
