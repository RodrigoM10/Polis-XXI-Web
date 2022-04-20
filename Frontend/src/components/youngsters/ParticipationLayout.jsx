import React, { useEffect, useState } from 'react';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import Title from '../title/Title';
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination } from "swiper";
import './stylesSwiper.css'
import { AXES_INFO_YOUNGSTERS_EVENTS } from '../../mocks/axesInfoYoungstersMock';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import { EventModal } from './EventModal';
SwiperCore.use([Pagination]);

export const ParticipationLayout = () => {
    const [lgShow, setLgShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [infoModal, setInfoModal] = useState({});

    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {

        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.3
                }
            })
        }
        if (!inView) {
            animation.start({ x: '-100vw' })
        }
    }, [animation, inView])

    function openInfoModal(eventId) {
        const object = AXES_INFO_YOUNGSTERS_EVENTS.find(obj => obj.id === eventId);
        setInfoModal(object)
        setFullscreen('md-down');
        setLgShow(true)
      }

    return (
        <Container>
            <div>
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", delay: 0.5 }}
                >
                    <Title
                        type='sky-1'
                        placeholder='Eventos y Seminarios'
                        position='center'
                    />
                </motion.div>
                <div>
                    <Swiper
                        slidesPerView={4}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            "@1.50": {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"
                    >
                        {AXES_INFO_YOUNGSTERS_EVENTS.map((evento, i) => (
                            <SwiperSlide
                                key={i} evento={evento}
                                className=" mt-5">
                                <div className="mx-3">
                                    <Card
                                       onClick={() => openInfoModal(`${evento.id}`)} 
                                        className="d-flex flex-column align-items-center slider-item"
                                    >
                                        <div className="mt-3">
                                            <Card.Img
                                                className='img_1'
                                                variant="top"
                                                src={evento.images.img_1} />
                                        </div>
                                        <Card.Body>
                                            <ListGroup variant="flush">
                                                <ListGroupItem>
                                                    <Card.Title className="descripcion mt-1 text-center">
                                                        {evento.title}
                                                    </Card.Title>
                                                </ListGroupItem>
                                                <ListGroup.Item>{evento.date}</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
                <EventModal lgShow={lgShow} setLgShow={setLgShow} fullscreen={fullscreen} infoModal={infoModal} />
            </div>
        </Container>
    )
}
