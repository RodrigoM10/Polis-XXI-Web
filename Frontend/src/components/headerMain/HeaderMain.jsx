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
            <img className="img-polis-header d-none d-lg-block my-4" src={headerLogo} alt="header-logo" />
            <Row className="d-none d-md-flex justify-content-center align-items-center  text-center" >
                <Col xs={5}>   
                    <h3 className='text-main m-3'>
                        Somos una institución cuyo propósito es fortalecer acciones y lazos comunitarios, la integración, el desarrollo sustentable y el bienestar de la sociedad.
                    </h3>
                </Col>
                <Col xs={5}>   
                    <p className='text-main m-4'>
                        Para alcanzar dichos objetivos, nuestros equipos profesionales necesitan de la colaboración de nuestros socixs, colaboradores y suscriptores. Gracias a todos que con sus aportes nos permiten seguir trabajando y ampliando todos los proyectos día a día.
                    <br /> 
                        <Link to='/participate' className='text-center'> Sumate a nuestra lista de colaboradores</Link>
                    </p>
                </Col>
            </Row>
            <TextMain/>         
            {/* <button onClick={scrollDown} className="d-none d-md-block scroll-down-btn rounded-circle"><FaArrowCircleDown className="mb-1" /></button> */}
        </div>
    )
}
