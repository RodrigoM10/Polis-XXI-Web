import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'

const HeaderPages = () => {

    const scrollDown = () => {
        window.scrollTo();
    };
    return (
        <div className="d-flex flex-column justify-content-start justify-content-lg-center align-items-center header-main">
            <h1 className='text-center my-5 title-axes-insti'>
               NOSOTROS
            </h1>
            <button onClick={scrollDown} className="d-none d-md-block scroll-down-btn rounded-circle"><FaArrowCircleDown className="mb-1" /></button>
        </div>
    )
}

export default HeaderPages