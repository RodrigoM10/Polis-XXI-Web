import React from 'react'
import './headerMain.css'

import headerLogo from '../../assets/LogoNuevo1.png'
import { TextMain } from '../textMain/TextMain'


import { FaArrowCircleDown} from 'react-icons/fa'

const scrollDown = () => {
    window.scrollTo(0, 505);
};
export const HeaderMain = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center header-main">
            <img className="w-50" src={headerLogo} alt="header-logo" />
            <TextMain />
            <button onClick={scrollDown} className="scroll-down-btn rounded-circle"><FaArrowCircleDown className="mb-1"/></button>
        </div>
    )
}
