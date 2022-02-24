import React from 'react'
import { useLocation } from 'react-router-dom';

const HeaderPages = () => {

    const path = useLocation().pathname;
    const currentlocation = path.split("/")[1];

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <div className="d-flex flex-column justify-content-start justify-content-lg-start align-items-start header-main header-pages-background">
            {splitLocation[1] === "aboutUs" &&
            <>
                 <h1 className='text-start my-5 title-header-pages'>NOSOTROS</h1>
                 <h5 className='text-main text-header-pages'>Conocé más sobre nosotros, nuestra misión y que hacemos.</h5>
            </>
             }
             {splitLocation[1] === "novelties" &&
            <>
                 <h1 className='text-start my-5 title-header-pages'>NOVEDADES</h1>
                 <h5 className='text-main text-header-pages'>Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo</h5>
            </>
             }
             {splitLocation[1] === "participate" &&
            <>
                 <h1 className='text-start my-5 title-header-pages'>PARTICIPÁ / COLABORÁ</h1>
                 <h5 className='text-main text-header-pages'>Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo</h5>
            </>
             }
        </div>
    )
}

export default HeaderPages