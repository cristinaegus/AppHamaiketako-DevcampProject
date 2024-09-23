import React, {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> 
                <img src="https://github.com/cristinaegus/AppHamaiketako-DevcampProject/blob/main/src/img/logo01.png" width={80} height={80} >
                </img>
            </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> INICIO</a>
                <a href="#"> BLOG</a>
                <a href="#"> RUTAS</a>
               
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
