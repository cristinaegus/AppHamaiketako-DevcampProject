import React, {useState,useEffect, memo} from 'react';
import {Link} from 'react-router-dom';
import logo01 from '../../../static/assets/images/logo01.png';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        // Actualiza el estado de la navbar cuando se pincha en un enlace
        const handleLinkClick = () => {
          setIsOpen(false);
        };
        document.addEventListener('click', handleLinkClick);
        return () => {
          document.removeEventListener('click', handleLinkClick);
        };
    }, [isOpen]);
        
    return(
        <div className="navbar">
          <div className="nav-logo">    
              <img 
                src={logo01}
                width={150}
                height={150}
                alt="Hamaiketako Logo"
              />
          </div>
          <div className="tituloweb">
            <h1>Hamaiketako  BILBAO</h1>
            <h3>La ruta imprescindible para ir de pintxos</h3>
          </div>
          <div className={`nav_items ${isOpen && 'open'}`}>
            <Link to="/" className={`nav-link ${activeIndex === 0 ? 'nav-link-active' : ''}`} onClick={() => setActiveIndex(0)}>
                HOME
            </Link>
            <Link to="/rutas" className={`nav-link ${activeIndex === 1 ? 'nav-link-active' : ''}`} onClick={() => setActiveIndex(1)}>
                RUTAS
            </Link>
            <Link to="/blog" className={`nav-link ${activeIndex === 2 ? 'nav-link-active' : ''}`} onClick={() => setActiveIndex(2)}>
                BLOG
            </Link>
          </div>
          <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    );
};

export default memo(Navbar);