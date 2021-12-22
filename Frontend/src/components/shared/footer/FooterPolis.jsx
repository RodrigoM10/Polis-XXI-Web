import React from "react";
import './footerPolis.css'

// react-icons
import { FaArrowCircleUp, FaArrowUp, FaFacebookSquare, FaFrog, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const FooterPolis = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <footer className="footer-polis justify-content-center align-items-center">
            <div className="container-polis">
                <div className="row justify-content-center ">
                    <div className="footer-col ">
                        <h2>Nosotros</h2>
                        <ul>
                            <li><Link to='/aboutUs'>Nuestra Historia</Link></li>
                            <li><Link to='/aboutUs'>Nuestros Valores</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Contactanos</h2>
                        <ul>
                            <li><Link to=''>Recursos humanos</Link></li>
                            <li><Link to=''>Oficinas</Link></li>
                            <li><Link to=''>Legales</Link></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Nuestras redes</h2>
                        <div className="social-links">
                            <Link to=''><FaFacebookSquare className="social-icon" /></Link>
                            <Link to=''><FaInstagramSquare className="social-icon" /></Link>
                            <Link to=''><FaTwitterSquare className="social-icon" /></Link>

                        </div>
                    </div>
                </div>

                <br />
                <div className="rights-polis">
                    <p>  Polis XXI ©Derechos reservados </p>
                    <button className="arrowUp" onClick={scrollToTop}  ><FaArrowCircleUp className="mb-1 " /></button>
                </div>
            </div>

        </footer>

    )
}