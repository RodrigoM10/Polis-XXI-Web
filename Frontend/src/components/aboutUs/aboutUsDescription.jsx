import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from 'react-bootstrap';
import HeaderPages from '../headerPages/HeaderPages';



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
        <>
            <HeaderPages />
            <Container>
                {/* <h1 className='text-center my-5 title-axes-insti'>
                NOSOTROS
            </h1> */}
                <div >
                    <motion.h3 className=' my-4 title-axes'
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", delay: 0.5 }}
                    >
                        ¿Qué trabajamos en el Eje de Fortalecimiento Institucional?</motion.h3>
                    <motion.p className='fortalecimiento my-4 justify-content-center '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
                    >Diseñamos recursos y herramientas para contribuir al fortalecimiento de todos los niveles de gobierno de cara al desarrollo y gestión de políticas e iniciativas sostenibles y transparentes.
                        Nuestro trabajo se orienta a modernizar las estructuras institucionales en pos de garantizar instancias de toma de decisiones representativas y cercanas a las necesidades de la ciudadanía.
                        Los gobiernos locales son el punto de encuentro más cercano de la ciudadanía con la  estructura estatal y, por lo tanto, canal prioritario de las demandas sociales. En este sentido, la  necesidad de modernización de las estructuras, prácticas y procesos municipales es una  problemática de la agenda actual de los gobernantes y la ciudadanía, de cara a la mejora  constante de las políticas públicas.
                    </motion.p>
                </div>
                <div>
                    <motion.h3 className=' mt-5  title-axes'
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", delay: 0.5 }}
                    >
                        Nuestras propuestas de trabajo son:
                    </motion.h3>
                    <motion.p className='propuesta my-4 '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
                    >
                        Conformamos <strong>equipos interdisciplinados</strong>, con la unión de profesionales experimentados en la gestión pública,
                        el ámbito académico y el sector privado, para el  <strong>diseño de programas y capacitaciones</strong> específicas destinadas a <strong>agentes del sector público</strong> y a <strong>trabajadores del sector privado aplicados a la Responsabilidad Social Empresarial.</strong>
                    </motion.p>
                    <div className='transparencia'>
                        <motion.h4 className='col-md-4 title-axes-trans mt-5 '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1.5, stiffness: 5 }}
                        >Transparencia</motion.h4>
                        <motion.ul className='col-md-4'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1.5, stiffness: 5 }}
                        >
                            <li><p className='propuesta-trans'><strong>-</strong> Programa de fortalecimiento institucional para la rendición de cuentas en ámbitos locales.</p></li>
                            <li><p className='propuesta-trans'><strong>-</strong> Programas de transparencia activa y adaptación de registros administrativos para la ciudadanía.</p></li>
                        </motion.ul>
                    </div>
                    <div className='transparencia'>
                        <motion.h4 className='col-md-4 title-axes-trans mt-5 '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1.5, stiffness: 5 }}
                        >Cursos de Formación Profesional</motion.h4>
                        <motion.ul className='col-md-4'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1.5, stiffness: 5 }}>
                            <li><p className='propuesta-trans'><strong>-</strong> Políticas Públicas Ambientales: guía de buenas prácticas para los sectores público y privado.</p></li>
                            <li><p className='propuesta-trans'><strong>-</strong> Jóvenes y Empleo: taller de introducción al mundo del trabajo y el empleo. Orientado a jóvenes en edad de terminalidad escolar y/o recientemente ingresados a la educación superior.</p></li>
                        </motion.ul>
                    </div>
                    <div className='transparencia'>
                        <motion.h4 className='col-md-4 title-axes-trans mt-5 '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1.5, stiffness: 5 }}
                        >Observatorio Legislativo</motion.h4>
                        <motion.ul className='col-md-4'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1.5, stiffness: 5 }}
                        >
                            <li><p className='propuesta-trans'><strong>-</strong> Herramientas de enlace entre los Poderes Legislativo y Ejecutivo.</p></li>
                            <li><p className='propuesta-trans'><strong>-</strong> Curso de Técnica Legislativa y Análisis Parlamentario.</p></li>
                        </motion.ul>
                    </div>
                    <div className='transparencia'>
                        <motion.h4 className='col-md-4 title-axes-trans mt-5 '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1.5, stiffness: 5 }}
                        >Observatorio Vial</motion.h4>
                        <motion.ul className='col-md-4'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1.5, stiffness: 5 }}>
                            <li><p className='propuesta-trans'><strong>-</strong> Modelos de gestión para la aplicación de sistemas de estadística vial y siniestral en gobiernos locales.</p></li>
                            <li><p className='propuesta-trans'><strong>-</strong> Ciclos de talleres y simposios abiertos a la comunidad orientados a promover la seguridad vial, la movilidad sustentable y los hábitos saludables en el espacio público.</p></li>
                        </motion.ul>
                    </div>
                    <div ref={ref}>
                        <motion.h3 className=' mt-5  title-axes'
                            animate={animation}>
                            Nuestro compromiso con la sostenibilidad
                        </motion.h3>
                        <motion.p className='fortalecimiento my-4 justify-content-center '
                            animate={animation} >
                            Todas las acciones del eje de Fortalecimiento Institucional se inscriben y guían por los lineamientos de los Objetivos de Desarrollo Sostenible plasmados en la Agenda 2030 de las Naciones Unidas:
                        </motion.p>
                        <motion.ul className='' animate={animation}>
                            <li><p className='propuesta-trans'><strong>-</strong> ODS 4 «Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos», </p></li>
                            <li><p className='propuesta-trans'><strong>-</strong> ODS 8 «promover el crecimiento económico inclusivo y sostenible, el empleo y el trabajo decente para todos»</p></li>
                            <li><p className='propuesta-trans'><strong>-</strong> ODS 16 «Promover sociedades justas, pacíficas e inclusivas».</p>
                                <ul>
                                    <li className='propuesta-trans'> <p><strong>.</strong> 16.5 Reducir considerablemente la corrupción y el soborno en todas sus formas; </p></li>
                                    <li className='propuesta-trans'> <p><strong>.</strong> Crear a todos los niveles instituciones eficaces y transparentes que rindan cuentas; </p></li>
                                    <li className='propuesta-trans'> <p><strong>.</strong> 16.7 Garantizar la adopción en todos los niveles de decisiones inclusivas, participativas y representativas que respondan a las necesidades; </p></li>
                                    <li className='propuesta-trans'> <p><strong>.</strong> 16.10 Garantizar el acceso público a la información y proteger las libertades fundamentales, de conformidad con las leyes nacionales y los acuerdos internacionales</p></li>
                                </ul>
                            </li>
                        </motion.ul>
                    </div>
                </div>
                {/* <CardsInstitutions
                infoAxesInstitutions={infoAxesInstitutions}
            /> */}
            </Container>
        </>
    )
};

export default AboutUsDescription;
