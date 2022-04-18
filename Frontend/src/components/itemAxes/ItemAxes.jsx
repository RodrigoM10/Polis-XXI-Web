import React from 'react'
import { Row } from 'react-bootstrap'
import './itemAxes.css'

const ItemAxes = ({infoItems}) => {
    const {title, text1, text2} = infoItems

  return (
    <Row xs={12} className='mb-2 justify-content-evenly'>
        <h4 
            className='col-md-4 mb-3 title-axes sky-2'
        >
            {title}
        </h4>
        <ul 
            className='col-md-6' 
        > 
            <li><p className='item-text'><strong>- </strong>{text1}</p></li>
            {text2 ? 
            <li><p className='item-text'><strong>- </strong>{text2}</p></li>
            :
            <></>
        }
        </ul> 
    </Row>
  )
}

export default ItemAxes