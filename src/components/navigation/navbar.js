import React, {useState} from "react";
import {NavLink, Navlinks} from "react-router-dom";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

import Rutas from "../../components/pages/rutas";
import Blogs from "../../components/pages/blog";

import logo01 from "../../../static/assets/images/logo01.png";




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
                <NavLink exact to = "/"> 
                INICIO</NavLink>
                <NavLink exact to = "/rutas">
                RUTAS</NavLink>
                <NavLink exact to = "/blog">
                BLOG</NavLink>
                          
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

