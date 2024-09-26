import React, {useState} from "react";

import logo01 from "../../static/assets/images/logo01.png";

import {Link} from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    return(
        <div className="navbar">
          <div className="nav-logo">    
              <img 
              src = {logo01} width={120} height={120}
              />
         </div>
            <div className="tituloweb">
          <h1>Hamaiketako  BILBAO </h1>
          <h3>La ruta imprescindible para ir de pintxos</h3>
          </div>
            <div className={`nav_items ${isOpen && "open"}`}>

            <Link to="/">INICIO</Link>
            <Link to="/rutas">RUTAS</Link>
            <Link to="/blog">BLOG</Link>
                
               
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar

