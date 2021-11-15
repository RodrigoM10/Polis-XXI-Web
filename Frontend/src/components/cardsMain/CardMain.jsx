import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './cardMain.css'

const CardMain = ({ cardInfo }) => {
    return (
        <Card className={`d-flex flex-column align-itmes-center justify-content-center ${cardInfo.background} card-info-style mb-3`}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>{cardInfo.title}</Card.Title>
                <Card.Text className="text-center mx-auto">
                {cardInfo.description}
                </Card.Text>
                <Card.Link  as={Link} to={cardInfo.link} className="card-info-icon text-decoration-none">{cardInfo.icon}</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardMain
