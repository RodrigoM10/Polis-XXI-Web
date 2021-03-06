import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare,FaTelegram,FaDiscord } from 'react-icons/fa'
import './sidebarRedes.css'


export const SidebarRedes = () => {

    let ubicacion = window.pageYOffset;
    window.onscroll = function() {
        let Desplazamiento = window.pageYOffset;

        if(ubicacion >= Desplazamiento){
            
        }
    }

    return (
        <div className="sticky-container d-none d-sm-inline">
        <ul className="sticky sticky-side-social-icons">
            
            <li>
                <FaTwitterSquare className="sidebarIcon" />
                <p><Link to="https://twitter.com/noprog" target="_blank">Seguinos en<br/>Twitter</Link></p>
            </li>
            <li>
                <FaInstagramSquare className="sidebarIcon" />
                <p><Link to="https://twitter.com/noprog" target="_blank">Seguinos en<br/>Instagram</Link></p>
            </li>
            <li>
                <FaLinkedin className="sidebarIcon" />
                <p><Link to="https://www.linkedin.com/company/programacionnet" target="_blank">Conectanos en<br/>LinkedIn</Link></p>
            </li>
            <li>
                <FaTelegram className="sidebarIcon" />
                <p><Link to="http://www.telegram.com/programacionnet" target="_blank">Conectanos en<br/>Telegram</Link></p>
            </li>
            <li>
                <FaDiscord className="sidebarIcon" />
                <p><Link to="http://www.discord.com/programacionnet" target="_blank">nuestro canal de<br/>Discord</Link></p>
            </li>
        </ul>
    </div>
    )
}
