//creat un footer para todas las paginas

import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (    
        <div className="footer">
            <div className="container"> 
                <div className="row">
                
                   
                <div className="copyright">
                    <p>© 2024 Cegusquiza.</p>
                </div>
            </div>
        </div> 
        </div> 
    );
};

export default memo(Footer);       