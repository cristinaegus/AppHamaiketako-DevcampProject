import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

import logo01 from "../../../static/assets/images/logo01.png";


const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
        const [isOpen, setIsOpen] = useState(false)
   
    return(
        <div className="navbar">
          <div className="nav-logo">    
              <img 
              src = {logo01} width={150} height={150}
              />
         </div>
            <div className="tituloweb">
          <h1>Hamaiketako  BILBAO </h1>
          <h3>La ruta imprescindible para ir de pintxos</h3>
          </div>
          <div className={`nav_items ${isOpen && "open"}`}>
                <Link exact to="/" activeclassname="nav-link-active">
                    HOME
                </Link>
                <Link to="/rutas " activeclassname="nav-link-active">
                    RUTAS
                </Link>
                <Link to="/blog " activeclassname="nav-link-active">
                    BLOG
                </Link>
                </div>
                <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar;