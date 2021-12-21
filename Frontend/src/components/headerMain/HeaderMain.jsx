import React from 'react'
import './headerMain.css'

import headerLogo from '../../assets/LogoNuevo1.png'
import { TextMain } from '../textMain/TextMain'


import { FaArrowCircleDown} from 'react-icons/fa'

const scrollDown = () => {
    window.scrollTo(0, 550);
};
export const HeaderMain = () => {
    return (
        <div className="d-flex flex-column justify-content-start justify-content-lg-center align-items-center header-main">
            <img className="w-50 d-none d-lg-block" src={headerLogo} alt="header-logo" />
            {/* <TextMain /> */}
            <p className='text-center d-flex flex-column m-5' >Somos una institución cuyo propósito es fortalecer acciones y lazos comunitarios, la integración, el desarrollo sustentable y el bienestar de la sociedad. Para alcanzar dichos objetivos, nuestros equipos profesionales necesitan de la colaboración de nuestros socios, colaboradores y suscriptores. Gracias a todos que con sus aportes nos permiten seguir trabajando y ampliando todos los proyectos día a día. Sumate a nuestra lista de colaboradores</p>
            <button onClick={scrollDown} className="scroll-down-btn rounded-circle"><FaArrowCircleDown className="mb-1"/></button>      
        </div>
    )
}
