import React from 'react'
import { CardsInstitutions } from '../components/cardsAxes/CardsInstitutions'

function Institutions() {

    let infoAxesInstitutions = [
        {
            id: 1,
            title: 'Transparencia y rendición de cuentas',
            subtitle: '',
            position: 'me-md-auto',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
        {
            id: 2,
            title: 'Observatorio legislativo',
            subtitle: '',
            position: 'alt ms-md-auto',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
        {
            id: 3,
            title: 'Observatorio vial ',
            subtitle: '',
            position: 'me-md-auto',
            text: 'Conocé nuestra historia, webinars, eventos y agenda.'
        },
    
    ]
    return (
        <div>
            FORTALECIMIENTO INSTITUCIONAL
            <CardsInstitutions 
            infoAxesInstitutions={infoAxesInstitutions}
            />
        </div>
    )
}

export default Institutions
