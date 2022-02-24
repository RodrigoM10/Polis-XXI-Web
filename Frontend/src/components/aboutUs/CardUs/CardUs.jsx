import React from "react"
import icono_linkedin from "../../../assets/linkedin-icono.png"
import { Link } from "react-router-dom";
import './cardUs.css'

const CardUs = ({ infoCardsUs }) => {
    return (
        <div>
            <div className="text-center">
                <h2 className="title-axes-insti ">Nuestro equipo</h2>
            </div>
            <div className="row row-cols-2 row-cols-md-5 justify-content-center align-items-center">
                {infoCardsUs && (
                    infoCardsUs.map((card, i) => (
                        <div className="person-container" key={i}>
                            <div className="img-us-container">
                                <img
                                    className="circle-us"
                                    src={card.img}
                                    alt="maroñas"
                                />
                            </div>
                            <div className="description-us-container d-flex flex-column justify-content-between align-items-center">
                                <div className="divider-us"></div>
                                <span className="name-us">{card.name}</span>
                                <span className="profession-us">{card.title}</span>
                                <Link to={card.linkedin_link} target="_blank"><img className="icono-linkedin" src={icono_linkedin} alt="linkedin-icono" /></Link>

                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default CardUs;
