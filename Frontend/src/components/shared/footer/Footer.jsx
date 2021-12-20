import React from 'react'
import './footer.css'

// react-icons
import { FaArrowUp, FaFacebookSquare, FaFrog, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="mt-auto footer-style">
            <div className="d-flex justify-content-center align-items-center p-3">
                <FaFacebookSquare className="social-icon"/>
                <FaInstagramSquare className="social-icon"/>
                <FaTwitterSquare className="social-icon"/>
            </div>
            <div className="d-flex align-items-center justify-content-around py-2 ">
                <div>
                    <span >PolisXX1 <FaFrog className="mb-1 mx-1" /></span>
                </div>
                <div>
                    <button onClick={scrollToTop} className="to-top-btn"><FaArrowUp className="mb-1"/></button>
                </div>
            </div>
        </div>
    )
}












































// import { Link } from "react-router-dom";
// import './footer.css'
// import instagram from "../../../assets/instagram_internet_media_network_social_icon_123258.png"
// import facebook from "../../../assets/facebook_internet_media_network_social_icon_123257.png"
// import youtube from "../../../assets/YOUTUBE_icon-icons.com_65487.png"
// import twit from "../../../assets/twit.png"


// const Footer2 = () => {
    
//     return (
      
//         <div className='footer-container '>
//       {/* <section className=' col md-4 footer-subscription'>
//         <p className='footer-subscription-heading'>
//           Dejanos tu consulta aqui. Te responderemos lo mas rapido posible
//         </p>
        
//         <div className='input-areas'>
//           <FormContact />
//         </div>
//       </section> */}
//       <div class=' col md-4 footer-links'>
//         <div className='footer-link-wrapper'>
//           <div class='footer-link-items'>
//             <h2>Nosotros</h2>
//             <Link to='/sign-up'>Quienes somos</Link>
//             <Link to='/'>Testimonios</Link>
//             <Link to='/'>Carrera</Link>
            
            
//           </div>
//           <div class='footer-link-items'>
//             <h2>Contactanos</h2>
//             <Link to='/'>Contact</Link>
//             <Link to='/'>Sponsors</Link>
//           </div>
//         </div>
//         <div className='footer-link-wrapper'>
//           <div class='footer-link-items'>
//           <h2>Redes Sociales</h2>
//             <div>
//             <Link to='/'>
//             <img className="iconos" src={instagram} alt="" /></Link>
//             <Link to='/'><img className="iconos" src={facebook} alt="" /></Link>
//             <Link to='/'><img className="iconos" src={youtube} alt="" /></Link>
//             <Link to='/'><img className="iconos" src={twit} alt="" /></Link>
//             </div>
            
//           </div>
//         </div>
        
//       </div>
//       <h4 class='website-rights '>POLIS XXI – Asociación Civil ©2020</h4>
      
//     </div>
 
        
        
//     )
// }

// export default Footer2;
