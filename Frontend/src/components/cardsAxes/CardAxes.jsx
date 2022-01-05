import React from 'react'
import { NavLink } from 'react-bootstrap'
import './cardAxes.scss'

export const CardAxes = ({ infoCardAxes }) => {

    return (
        <div className={`blog-card ${infoCardAxes.position} px-0 mx-auto`}>
            <div className="meta">
                <div className="photo"></div>
                <ul className="details">
                    <li className="author"><a href="#">John Doe</a></li>
                    <li className="date">Aug. 24, 2015</li>
                    <li className="tags">
                        <ul>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Code</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">CSS</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="description">
                <h1>{infoCardAxes.title}</h1>
                <div className="d-flex flex-column justify-content-between">
                    <h2>Opening a door to the future</h2>
                    <div>
                        <p>
                            <NavLink>
                                {infoCardAxes.text}
                            </NavLink>
                            <NavLink>
                                {infoCardAxes.text1}
                            </NavLink>
                        </p>
                    </div>
                </div>
                    <span className="read-more">
                        <a href="#">Leer más</a>
                    </span>
            </div>
        </div>
    )
}
