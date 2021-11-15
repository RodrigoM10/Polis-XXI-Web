import React, { useState } from 'react'
import "./textMain.css"

export const TextMain = () => {

    //FORMA 1

    const [verMas, setVerMas] = useState(false);
    const extraContent = (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    );
    const linkContent = verMas ? "<< Ver menos" : "Ver más >>";
    const verMasClick = (e) => {
        setVerMas(!verMas);
    };

    // FORMA 2

    const [showMore, setShowMore] = useState(false);
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const getText = () => {
      // For Text that is shorter than desired length
      if (text.length <= 106) return text;
      // If text is longer than desired length & showMore is true
      if (text.length > 106 && showMore) {
        return (
          <>
            <p>
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
            <p>
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
            <div className="d-flex flex-column m-5">
                <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                {verMas && extraContent}
                <p onClick={verMasClick} className="showMore-btn">
                    {linkContent}
                </p>
            </div>
            <div className="text-center d-flex flex-column m-5">
               {getText()}
            </div>
        </>
    )
}
