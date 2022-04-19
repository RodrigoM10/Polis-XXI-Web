import React from 'react'
import { Button } from 'react-bootstrap'
import './buttonPolis.css'

const  ButtonPolis = ({path, placeholder}) => {
  return (
    <Button className="btn-polis" variant="outline">{placeholder}</Button>
  )
}

export default  ButtonPolis