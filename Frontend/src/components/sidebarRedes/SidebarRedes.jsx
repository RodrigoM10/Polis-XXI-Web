import React from 'react'
import './sidebarRedes.css'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { Link } from 'react-router-dom'


export const SidebarRedes = () => {
    return (
        <div class="sticky-container">
        <ul class="sticky">
            <li>
                <FaFacebookSquare className="sidebarIcon"/>
                <p><Link to="https://www.facebook.com/programacionnet" target="_blank">Like Us on<br/>Facebook</Link></p>
            </li>
            <li>
                <FaTwitterSquare className="sidebarIcon" />
                <p><Link to="https://twitter.com/noprog" target="_blank">Follow Us on<br/>Twitter</Link></p>
            </li>
            {/* <li>
                <GrMail className="sidebarIcon" />
                <p><Link to="https://plus.google.com/programacionnet" target="_blank">Follow Us on<br/>Google+</Link></p>
            </li> */}
            <li>
                <FaLinkedin className="sidebarIcon" />
                <p><Link to="https://www.linkedin.com/company/programacionnet" target="_blank">Follow Us on<br/>LinkedIn</Link></p>
            </li>
            <li>
                <FaYoutubeSquare className="sidebarIcon" />
                <p><Link to="http://www.youtube.com/programacionnet" target="_blank">Subscribe on<br/>YouYube</Link></p>
            </li>
            <li>
                <FaInstagramSquare className="sidebarIcon" />
                <p><Link to="https://www.pinterest.com/programacionnet" target="_blank">Follow Us on<br/>Pinterest</Link></p>
            </li>
        </ul>
    </div>
    )
}
