import React from 'react'
import maroñas from '../../assets/AboutUs/Abel-Maroñas.jpg'
import Alfonzo from '../../assets/AboutUs/Celeste-Alfonzo.jpg'
import Giudice from '../../assets/AboutUs/GiudiceMatias.jpeg'
import Perpetua from '../../assets/AboutUs/Joel-Perpetua.jpg'
import Moreno from '../../assets/AboutUs/Nora-Moreno.jpg'
import Pereyra from '../../assets/AboutUs/Pereyra.jpg'
import Saraceno from '../../assets/AboutUs/Santiago-Saraceno.jpg'
import Torrico from '../../assets/AboutUs/Torrico.jpg'
import CardUs from '../../components/CardUs/CardUs'
import '../../components/CardUs/AboutUs.css'

function AboutUs() {

    let infoCardsUs = [
        {
            id: 1,
            name: 'Abel Moraños',
            title:"Abogado",
            img:maroñas,    
        },
        {
            id: 2,
            name: 'Celeste Alfonzo',
            title:"Abogado",
            img:Alfonzo,    
        },
        {
            id: 3,
            name: 'Matias Giudice',
            title:"Abogado",
            img:Giudice,    
        },
        {
            id: 4,
            name: 'Joel Perpetua',
            title:"Abogado",
            img:Perpetua,    
        },
        {
            id: 5,
            name: 'Nora Moreno',
            title:"Abogado",
            img:Moreno,    
        },
        {
            id: 6,
            name: 'Lautaro Pereyra Ramirez',
            title:"Abogado",
            img:Pereyra,    
        },
        {
            id: 7,
            name: 'Santiago Saraceno',
            title:"Abogado",
            img:Saraceno,    
        },
        {
            id: 8,
            name: 'Torrico',
            title:"Abogado",
            img:Torrico,    
        },
    ];



    return (

        <div>
         <h1>NOSOTROS</h1>
         <div className='container-cards-us'>
         <CardUs  infoCardsUs={infoCardsUs}/>
         </div>
        </div>
    )
};

export default AboutUs;
