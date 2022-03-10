import React from 'react'
import headerLogo from '../../assets/LogoNuevo1.png'
import { TextMain } from '../textMain/TextMain'
import { Link } from 'react-router-dom'
import './headerMain.css'

export const HeaderMain = () => {
    return (
        <div className="d-flex flex-column justify-content-start justify-content-lg-center align-items-center header-main header-main-background">
            <img className="img-polis-header d-none d-lg-block mt-3" src={headerLogo} alt="header-logo" />
            {/* <TextMain /> */}
            <div className="d-none d-md-flex justify-content-center align-items-center px-2 text-center" >
                <p className='text-main d-flex flex-column m-4  '>
                    Somxs una institución cuyo propósito es fortalecer acciones y lazos comunitarios, la integración, el desarrollo sustentable y el bienestar de la sociedad.
                    <br /> 
                    Para alcanzar dichos objetivos, nuestros equipos profesionales necesitan de la colaboración de nuestros socixs, colaboradores y suscriptores. Gracias a todos que con sus aportes nos permiten seguir trabajando y ampliando todos los proyectos día a día.
                    <Link to='/participate' className='text-center text-add'> Sumate a nuestra lista de colaboradores</Link>
                </p>
            </div>
            <TextMain/>         
        </div>
    )
}
