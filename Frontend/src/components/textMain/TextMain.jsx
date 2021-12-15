import React, { useState } from 'react'
import "./textMain.css"

export const TextMain = () => {

    //FORMA 1

    const [verMas, setVerMas] = useState(false);
    const extraContent = (
        <p >
            Somos una institución cuyo propósito es fortalecer acciones y lazos comunitarios, la integración, el desarrollo sustentable y el bienestar de la sociedad. Para alcanzar dichos objetivos, nuestros equipos profesionales necesitan de la colaboración de nuestros socios, colaboradores y suscriptores.
Gracias a todos que con sus aportes nos permiten seguir trabajando y ampliando todos los proyectos día a día. Sumate a nuestra lista de colaboradores.
        </p>
    );
    const linkContent = verMas ? "<< Ver menos" : "Ver más >>";
    const verMasClick = (e) => {
        setVerMas(!verMas);
    };

    // FORMA 2

    const [showMore, setShowMore] = useState(false);
    const text =
      "Somos una institución cuyo propósito es fortalecer acciones y lazos comunitarios, la integración, el desarrollo sustentable y el bienestar de la sociedad. Para alcanzar dichos objetivos, nuestros equipos profesionales necesitan de la colaboración de nuestros socios, colaboradores y suscriptores. Gracias a todos que con sus aportes nos permiten seguir trabajando y ampliando todos los proyectos día a día. Sumate a nuestra lista de colaboradores"
    const getText = () => {
      // For Text that is shorter than desired length
      if (text.length <= 106) return text;
      // If text is longer than desired length & showMore is true
      if (text.length > 106 && showMore) {
        return (
          <>
            <p style={{fontFamily:"Montserrat",justifyContent:"center",alignItems:"center"}}>
              {text}
              <span className="showMore-btn ms-1" onClick={() => setShowMore(false)}>
                Ver menos
              </span>
            </p>
          </>
        );
      }
      // If text is longer than desired length & showMore is false
      if (text.length > 107) {
        return (
          <>
            <p style={{fontFamily:"Montserrat",justifyContent:"center",alignItems:"center"}}>
              {text.slice(0, 254)}
              <span className="showMore-btn" onClick={() => setShowMore(true)}>
                ... Ver más
              </span>
            </p>
          </>
        );
      }
    };


    return (
        <>
            {/* <div className="d-flex flex-column m-5">
                <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                {verMas && extraContent}
                <p onClick={verMasClick} className="showMore-btn">
                    {linkContent}
                </p>
            </div> */}
            <div className="text-center d-flex flex-column m-5">
               {getText()}
            </div>
        </>
    )
}
