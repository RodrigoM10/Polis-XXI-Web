import React from 'react'
import './title.css'

const Title = ({ type, placeholder, position }) => {
    return (
        <h1 className={`text-${position} my-5 title-axes ${type}`}>
            { placeholder }
        </h1>
    )
}

export default Title