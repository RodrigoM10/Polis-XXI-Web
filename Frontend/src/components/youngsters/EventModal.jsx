import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import './stylesSwiper.css'

export const EventModal = ({ lgShow, setLgShow, fullscreen, infoModal }) => {

    return (
        <Modal
            size="lg"
            show={lgShow}
            fullscreen={fullscreen}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {infoModal?.title}   {`(${infoModal?.date})`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>
                    {infoModal?.subtitle}
                </h6>
                <div>
                    <p>
                    {infoModal?.texts?.text_1}
                    </p>      
                    <p>
                        {infoModal?.texts?.text_2}
                    </p>      
                    <p>
                        {infoModal?.texts?.text_3}
                    </p>
                </div>
                <div className='row row-cols-4'>
                    <img className='img-modal' src={infoModal?.images?.img_2}/>
                    <img className='img-modal' src={infoModal?.images?.img_3}/>
                    {/* <img src={infoModal?.images?.img_2}/> */}
                </div>

            </Modal.Body>
        </Modal>
    )
}
