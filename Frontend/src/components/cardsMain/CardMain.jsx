import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './cardMain.css'

const CardMain = ({ cardInfo }) => {
    return (
        <Card className={`d-flex flex-column align-itmes-center justify-content-center ${cardInfo.background} card-info-style mb-3`}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                {/* <Card.Title style={{fontWeight:"900",fontSize:"2em",textAlign:"center"}}>{cardInfo.title}</Card.Title> */}
                <Card.Title className={`${cardInfo.width} card-title-style text-center `}>{cardInfo.title}</Card.Title>
                <div className="card-icon-container d-flex justify-content-center align-items-center">
                    <Card.Link as={Link} to={cardInfo.link} className="d-flex justify-content-center card-info-icon text-decoration-none">{cardInfo.icon}</Card.Link>
                </div>
                <Card.Text className="card-info-text mt-4 text-center">
                    {cardInfo.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardMain
