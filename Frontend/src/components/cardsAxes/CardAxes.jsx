import React from 'react'
import { Link } from "react-router-dom"
import './cardAxes.scss'

export const CardAxes = ({ infoCardAxes }) => {

    return (
        <div className={`blog-card ${infoCardAxes.position} px-0 mx-auto`}>
            <div className="meta">
                <div className="photo" style={{ backgroundImage: `url(${infoCardAxes.image})` }}>
                </div>
                <ul className="details d-flex flex-column justify-content-center aling-items-center" >
                    <li className='my-2 '><Link to={infoCardAxes.link} className='text-decoration-none text-white'>{infoCardAxes.list.item_1}</Link></li>
                    <li className='my-2 '><Link to={infoCardAxes.link} onClick={() => window.location.replace(infoCardAxes.links.link_1)} className='text-decoration-none text-white'>{infoCardAxes.list.item_2}</Link></li>
                    <li className='my-2 '><Link to={infoCardAxes.link} onClick={() => window.location.replace(infoCardAxes.links.link_2)} className='text-decoration-none text-white'>{infoCardAxes.list.item_3}</Link></li>
                    <li className='my-2 '><Link to={infoCardAxes.link} onClick={() => window.location.replace(infoCardAxes.links.link_3)} className='text-decoration-none text-white'>{infoCardAxes.list.item_4}</Link></li>
                </ul>
            </div>
            <div className="description">
                <h1>{(infoCardAxes.title).toUpperCase()}</h1>
                <br />
                <p className='card-text'>{infoCardAxes.text} </p>
                <p className="read-more">
                    <Link to={infoCardAxes.link}>Leer mas</Link>
                </p>
            </div>
        </div>
    )
}
