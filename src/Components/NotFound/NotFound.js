import React from 'react';
import notfound from "../../images/404-page.gif.crdownload"
const NotFound = () => {
    return (
        <div className='text-center img-fluid bg-dark'>
            <img className="img-fluid" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;