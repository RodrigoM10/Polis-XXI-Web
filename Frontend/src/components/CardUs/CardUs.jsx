import React from "react"
import './AboutUs.css'




const CardUs = ({infoCardsUs}) => {

 
    return (
      <>
        {infoCardsUs && (
            infoCardsUs.map((card,i) => (
    <div key={i}>
        <div className="person">
            <div className="container-us">
                <div className="container-inner">
                    <img
                    className="circle-us"
                    src={card.img}
                    alt="maroñas"
                    />
                </div>
            </div>
                <div className="divider-us"></div>
                <div className="name-us">{card.name}</div>
                <div className="title-us">{card.title}</div>
        </div>
    </div>
      ))
      )}
      </>
    )
};

export default CardUs;
