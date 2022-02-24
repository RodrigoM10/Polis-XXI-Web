import React from 'react'
import { NavLink } from 'react-bootstrap'
import './cardAxes.scss'

export const CardAxes = ({ infoCardAxes }) => {


    return (
        <div className={`blog-card ${infoCardAxes.position} px-0 mx-auto`}>
            <div className="meta">
                <div className="photo"></div>
                <ul className="details">

                </ul>
            </div>
            <div className="description">
                <h1>{infoCardAxes.title}</h1>
                <br />
                <p className='card-text'>{infoCardAxes.text} </p>
                <p className="read-more">
                    <NavLink>
                        Leer más
                    </NavLink>
                </p>
            </div>
        </div>
    )
}
