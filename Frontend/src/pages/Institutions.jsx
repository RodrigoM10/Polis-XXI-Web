import React from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import { CardsInstitutions } from '../components/cardsAxes/CardsInstitutions'

function Institutions() {
    const [modalShow, setModalShow] = React.useState(false);

    let infoAxesInstitutions = [
        {
            id: 1,
            title: 'Transparencia y rendición de cuentas',
            subtitle: '',
            position: '',
            text: 'Programa de fortalecimiento institucional para la rendición de cuentas en ámbitos locales.',
            text1: 'Programas de transparencia activa y adaptación de registros administrativos para la ciudadanía.'
        },
        {
            id: 2,
            title: 'Observatorio legislativo',
            subtitle: '',
            position: 'alt',
            text: 'Curso de Técnica Legislativa y Análisis Parlamentario.',
            text1: 'Informes temáticos sobre actividad legislativa.'
        },
        {
            id: 3,
            title: 'Observatorio vial ',
            subtitle: '',
            position: '',
            text: 'Modelos de gestión para la aplicación de sistemas de estadística vial y siniestral en gobiernos locales.',
            text1: 'Ciclos de talleres y simposios abiertos a la comunidad orientados a promover la seguridad vial, la movilidad sustentable y los hábitos saludables en el espacio público.'
        },

    ]

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered   
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        ¿ Qué trabajamos ?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Diseñamos recursos y herramientas para contribuir al fortalecimiento de todos los niveles de gobierno de cara al desarrollo y gestión de políticas e iniciativas sostenibles y transparentes. Nuestro trabajo se orienta a modernizar las estructuras institucionales en pos de garantizar instancias de toma de decisiones representativas y cercanas a las necesidades de la ciudadanía.
                    </p>
                </Modal.Body>
            </Modal>
        );
    }


    return (
        <Container>
            <h2 className='text-center my-4 title-axes'>
                FORTALECIMIENTO INSTITUCIONAL
            </h2>
            <div className="text-center">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    ¿Qué trabajamos en el Eje de Fortalecimiento Institucional?
                </Button>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <CardsInstitutions
                infoAxesInstitutions={infoAxesInstitutions}
            />
        </Container>
    )
}

export default Institutions
