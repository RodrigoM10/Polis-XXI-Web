import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import './description.css'
import Title from '../title/Title';

function AboutUsDescription() {

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



    return (
        <Container >
            <div>
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", delay: 0.5 }}
                >
                    <Title
                        type='violet-2'
                        placeholder='Polis XXI es una asociación civil, cuyo propósito es proponer y desarrollar acciones tendientes al desarrollo sostenible y la garantización de derechos.'
                        position='center'
                    />
                </motion.div>
                <motion.p className='text-description my-4 justify-content-center '
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
                >Los valores que guían nuestros proyectos son: sostenibilidad, equidad, diálogo, integración, desarrollo, transparencia, profesionalismo y vocación pública. Tenemos un enfoque integral, inclusivo e intersectorial
                </motion.p>
            </div>
            <div>
                <Row>
                    <Col xs={12} md={6}>
                        <motion.div
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", delay: 0.5 }}
                        >
                            <Title
                                type='violet-2'
                                placeholder='Campos de acción'
                                position='start'
                            />
                        </motion.div>
                        <motion.p className='text-description  my-4 '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
                        >
                            Nuestro campo de acción se basa en la articulación de acciones con el sector público y sus instituciones, como así también en el trabajo con los compromisos sociales que demuestran los sectores productivos y la sociedad civil.
                        </motion.p>
                    </Col>
                    <Col xs={12} md={6}>
                        <motion.div
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", delay: 0.5 }}
                        >
                            <Title
                                type='violet-2'
                                placeholder='Nuestro Objetivo'
                                position='start'
                            />
                        </motion.div>
                        <motion.p className='text-description  my-4 '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
                        >
                            Nuestro objetivo es proponer y desarrollar acciones tendientes al desarrollo sostenible de las ciudades bajo una perspectiva integral e intersectorial, planteando formas de trabajo conjunto basadas en la articulación y coordinación entre áreas y niveles de gobierno, el sector privado y la sociedad civil.
                        </motion.p>
                    </Col>
                </Row>
                <div ref={ref}>
                    <motion.div
                        animate={animation}
                    >
                        <Title
                            type='violet-2'
                            placeholder='¿ Que buscamos ?'
                            position='center'
                        />
                    </motion.div>
                    <motion.p className='text-description  my-4 justify-content-center '
                        animate={animation} >
                        Buscamos ser referenciados como un actor capaz de crear y fortalecer proyectos con impacto positivo en la sostenibilidad y el desarrollo, generando formas de crecimiento que mejoren las condiciones de las actuales generaciones sin comprometer los recursos de las futuras,facilitando herramientas de diagnóstico e implementación de políticas públicas y cimentando plataformas de diálogo y articulación intersectoriales
                    </motion.p>
                </div>
            </div>
        </Container>
    )
};

export default AboutUsDescription;
