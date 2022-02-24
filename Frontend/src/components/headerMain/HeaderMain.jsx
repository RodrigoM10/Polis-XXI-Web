import React from 'react'
import './headerMain.css'

import headerLogo from '../../assets/LogoNuevo1.png'
import { TextMain } from '../textMain/TextMain'


// import { FaArrowCircleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

// const scrollDown = () => {
//     window.scrollTo(0, 500);
// };
export const HeaderMain = () => {
    return (
        <div className="d-flex flex-column justify-content-start justify-content-lg-center align-items-center header-main">
            {/* <img className="img-polis-header d-none d-lg-block mt-3" src={headerLogo} alt="header-logo" /> */}
            <Row className="d-none d-md-inline justify-content-center align-items-center px-2 text-center" >
                <Col xs={6}>   
                    <h3 className='text-main d-flex flex-column m-4'>
                        Somos una institución cuyo propósito es fortalecer acciones y lazos comunitarios, la integración, el desarrollo sustentable y el bienestar de la sociedad.
                    </h3>
                </Col>
                    <br /> 
                <Col>   
                    <h5>
                        Para alcanzar dichos objetivos, nuestros equipos profesionales necesitan de la colaboración de nuestros socixs, colaboradores y suscriptores. Gracias a todos que con sus aportes nos permiten seguir trabajando y ampliando todos los proyectos día a día.
                        <Link to='/participate' className='text-center'> Sumate a nuestra lista de colaboradores</Link>
                    </h5>
                </Col>
            </Row>
            <TextMain/>         
            {/* <button onClick={scrollDown} className="d-none d-md-block scroll-down-btn rounded-circle"><FaArrowCircleDown className="mb-1" /></button> */}
        </div>
    )
}
