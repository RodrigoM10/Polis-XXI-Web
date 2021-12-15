import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './cardMain.css'

const CardMain = ({ cardInfo }) => {
    return (
        <Card className={`d-flex flex-column align-itmes-center justify-content-center ${cardInfo.background} card-info-style mb-3`}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title style={{fontWeight:"900",fontSize:"2em",textAlign:"center"}}>{cardInfo.title}</Card.Title>
               
                <Card.Link  as={Link} to={cardInfo.link} className="card-info-icon text-decoration-none">{cardInfo.icon}</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardMain
