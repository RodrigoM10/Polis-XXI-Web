import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./textMain.css"

export const TextMain = () => {
  const [verMas, setVerMas] = useState(false);
  const extraContent = (
    <span>
      Para alcanzar dichos objetivos, nuestros equipos profesionales necesitan de la colaboración de nuestros socios, colaboradores y suscriptores.
      Gracias a todos que con sus aportes nos permiten seguir trabajando y ampliando todos los proyectos día a día.
    </span>
  );
  const linkContent = verMas ? "Ver menos" : "Ver más";
  const verMasClick = (e) => {
    setVerMas(!verMas);
  };

  return (
      <div className="d-flex d-md-none justify-content-center align-items-center px-2">
        <p className='text-main-mobile d-flex flex-column m-5'>
            Somos una institución cuyo propósito es fortalecer acciones y lazos comunitarios, la integración, el desarrollo sustentable y el bienestar de la sociedad.
          {verMas && extraContent}
          <span onClick={verMasClick} className="showMore-btn">
            {linkContent}
          </span>
          <Link to='/participate' className='text-center'> Sumate a nuestra lista de colaboradores</Link>
        </p>
      </div>
  )
}
