import React from 'react'

// react-icons
import { FaArrowUp, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-around py-2">
                        <div>
                            <span>© 2021 Derechos Reservados FrogStaker</span>
                        </div>
                        <div>
                            <button onClick={scrollToTop}><FaArrowUp /></button>
                        </div>
                    </div>
                </div>
    )
}
