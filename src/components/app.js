import React, { useEffect, useRef, useState } from 'react';
import {BrowserRouter as Router, Link, Switch } from 'react-router-dom';

import Navbar from './navigation/navbar';
import Carousel from './navigation/carousel';
import Formulario from '../components/formulario';
import Home from './pages/home';
import Rutas from './pages/rutas';
import Blog from './pages/blog';
//import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
//import "../../../node_modules/dropzone/dist/min/dropzone.min.css";


import logo01  from '../../static/assets/images/logo01.png';
import foto1 from '../../static/assets/images/gettyimages-Guggenheim.jpg';
import foto2 from '../../static/assets/images/gettyimages-plazanueva.jpg';
import foto3 from '../../static/assets/images/gettyimages-riabilbao.jpg';
import antxoa from '../../static/assets/images/antxoaTaberna.jpg';




const Nav = () => {

  const [activeIndex, setActiveIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
     
    return(
        <Router>
          <div className="navbar">
            <div className="nav-logo">    
                <img 
                src = {logo01} width={150} height={150}
                />
           </div>
              <div className="tituloweb">
            <h1>Hamaiketako  BILBAO </h1>
            <h3>La ruta imprescindible para ir de pintxos</h3>
            </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                  <Router>
                    <div>
                      <Navbar/>
                        <Switch>
                     
                          <Route path ="/" exact component={Home}/>
                          <Route path ="/rutas" component={Rutas}/>
                          <Route path ="/blog" component={Blog}/>
                     
                            
                      </Switch>
                    </div>
                  </Router>
                  </div>
              <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </div>
          </Router>
        )


}

const App = () => { 
  const items = [

  
    <div className="foto1"> 
       <img 
        src = {foto1} width={612} height={407} />
    </div>,
      <div className="foto2"> 
     <img 
        src = {foto2} width={612} height={407} />
      </div>,
    <div className="foto3"> 
      <img 
        src = {foto3} width={612} height={407} />
    </div>,
  ];
     
  return (
   
    
      <div className="home-page-wrapper">
        <div className="app">
          <Navbar />
          <div className="pagecontent">
          <Carousel items={items} />
              <div className="right-column">
              <div className="Title">Hamaiketako</div>
                <p>Que significa :"Hamaiketako"  la traduccion literal es "lo de las once". 
                Es decir tomar algo al medio dia. Esto se ha transformado en la costumbre de “ir de pintxos” 
                en las zonas de Bilbao, donde encontramos rutas de “cocina en miniatura”.
                Existen rutas de “pintxos”,cada una con su propio estilo. 
                Te gustará sumarte a la experiencia saboreando algunas de esas delicias y pintxos.
                Cuentanos tu experiencia y nos pondremos en contacto contigo</p>
                <div className="fototitulo">
                    <img src={antxoa} width={300} height={250}/>
                </div>
            <div className ="form">
            <h3>Deja tu opinion</h3>
            <Formulario />
            </div>
            </div>      
          </div>
        </div>
      </div>          
   
  );
};  

export default App;
