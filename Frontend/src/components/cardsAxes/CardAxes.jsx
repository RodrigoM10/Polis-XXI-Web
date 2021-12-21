import React from 'react'
import './cardAxes.scss'

export const CardAxes = ({infoCardAxes}) => {

    return (
        <div >
            <div className={`blog-card mx-auto mx-md-0 ${infoCardAxes.position}`}>
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
                    <h2>Opening a door to the future</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <p className="read-more">
                        <a href="#">Read More</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
