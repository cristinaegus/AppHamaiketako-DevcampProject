import React, {useState} from "react";
import { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";
import {Link} from "react-router-dom";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return(
        <div className="navbar">
            <div className="nav_logo"> 
              <img src=' https://devcamp-space.s3.amazonaws.com/i3oiRY6YYQ8if9Si3h41y9vx?response-content-disposition=inline%3B%20filename%3D%22logo01.png%22%3B%20filename%2A%3DUTF-8%27%27logo01.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20240924%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240924T083402Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=d8d7fa6645042f9221e24736a386dce24822a0ca681fdce64f0df1aad5664066' width={150}heigh={150}></img>
            </div>     
            <div className="tituloweb">
          <h1>Hamaiketako  BILBAO </h1>
          <h3>La ruta imprescindible para ir de pintxos</h3>
          </div>
            <div className={`nav_items ${isOpen && "open"}`}>

                <a href="#"> INICIO</a>
                <a href="#"> RUTAS</a>
                <a href="#"> BLOG</a>
                
               
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

