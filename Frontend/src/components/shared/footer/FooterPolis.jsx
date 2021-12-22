import React from "react";
import './footerPolis.css'

// react-icons
import { FaArrowUp, FaFacebookSquare, FaFrog, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

export const   FooterPolis = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <footer className="footer-polis justify-content-center align-items-center">
            <div className="container-polis">
            <div className="row justify-content-center">
            <div className="footer-col">
            <h2>Nosotros</h2>
            <ul>
  	 				<li><a href="/Nosotros">Nuestra Historia</a></li>
  	 				<li><a href="/Nosotros">Nuestros Valores</a></li>
  	 			</ul>
            </div>
            <div className="footer-col">
            <h2>Contactanos</h2>
            <ul>
  	 				<li><a href="#">Recursos humanos</a></li>
  	 				<li><a href="#">Oficinas</a></li>
  	 				<li><a href="#">Legales</a></li>
  	 				
  	 			</ul>
            </div>
            <div className="footer-col">
            <h2>Nuestras redes</h2>
            <div className="social-links">
            <a href=""><FaFacebookSquare className="social-icon"/></a>
            <a href=""><FaInstagramSquare className="social-icon"/></a>
            <a href=""><FaTwitterSquare className="social-icon"/></a>
            
  	 			</div>
            </div>
            </div>
            
            <br/>
           <div className="rights-polis">
               <p>  Polis XXI ©Derechos reservados </p>
               <button className="arrowUp" onClick={scrollToTop}  ><FaArrowUp className="mb-1 "/></button>

           </div>
            </div>

        </footer>
       
    )
}