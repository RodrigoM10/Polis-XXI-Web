import React from 'react'
import { IoIosSchool } from 'react-icons/io';
import { motion } from 'framer-motion/dist/framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";

const TimelineYoung = () => {
    let schoolIconStyles = { background: "#00a9bc" };

    let timelineElements = [
        {
          id: 1,
          title: "Jovenes egresados nos cuentan su experiencia",
          professor: "Lic. Rodrigues Maria Teresa",
          description:
            "El objetivo de este encuentro era comenzar a debatir sobre los primeros pasos en el mundo laboral y su inserción,fracasos y exitos.",
          date: "22 Junio-2020",
    
        },
        {
          id: 2,
          title: "Jovenes y empleo",
          professor: "Lic. Navarro Santiago y Lic Bustillo Marcos",
          description:
            "Que es el mercado laboral, habilidades duras y blandas, establecer redes de contacto y ayudas sobre armado de Curriculum Vitae.",
          date: "25 Junio-2020",
    
        },
        {
          id: 3,
          title: "Proceso de selección",
          professor: "Lic. Anauati Teo",
          description:
            "Como prepararnos para una entrevista, que herramientas podemos utilizar, identificar nuestras habilidades y defectos.",
          date: "18 Agosto-2020",
    
        },
        {
          id: 4,
          title: "La ruta de la ciberseguridad:¿Que camino puedo seguir?",
          professor: "Carranza Patricio",
          description:
            "conocimos la manera en la que se ha desarrollado la seguridad, su estado actual y lo que podemos esperar en los próximos años. Además, descubrimos cómo es el trabajo de algunos de los perfiles profesionales más demandados en el rubro de la seguridad informática, y revisaremos las metodologías y herramientas de trabajo que utilizan.",
          date: "24 Agosto-2020",
    
        },
        {
          id: 5,
          title: "Industria 4.0, IoT y Nuevos Modelos de Negocios",
          professor: "Carranza Patricio",
          description:
            "Internet de las Cosas ofrecerá soluciones para cubrir prácticamente todo lo relacionado con producción industrial, ciudades inteligentes, centros comerciales, centros de salud, vehículos y hasta cepillos de dientes.",
          date: "28 Agosto-2020",
    
        },
        {
          id: 6,
          title: "Impacto de la  Economia Digital en la Argentina",
          professor: "Lic. CORONEL GUILLERMO",
          description:
            "como la Pandemia promovió en forma acelerada cambios culturales en nuestras economías poniendo en evidencia la necesidad del tratamiento y desarrollo de varias Proyectos de Ley como de proponer nuevos intentando garantizar derechos a la accesibilidad a Internet, a las nuevas formas de contrato laboral, a las nuevas relaciones de la economía. ",
          date: "30 Noviembre-2020",
    
        },
      ];
  return (
    <div className="timeline-container">
    <motion.h1 className="title" initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}> WEBINARS</motion.h1>

    <VerticalTimeline>
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}>
        {timelineElements.map((element) => (

          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={schoolIconStyles}
            icon={<IoIosSchool />}
          >
            <div className="vertical-timeline-element">
              <h3 className="vertical-timeline-element-title titleh3">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.professor}
              </h5>
              <p id="description">{element.description}</p>
            </div>
          </VerticalTimelineElement>
        ))};
      </motion.div>
    </VerticalTimeline>
  </div>

  )
}

export default TimelineYoung