import React from "react";
import Carousel from '../navigation/carousel';
import Formulario from '../formulario';
import Navbar from '../navigation/navbar';


import foto1 from '../../../static/assets/images/gettyimages-Guggenheim.jpg';
import foto2 from '../../../static/assets/images/gettyimages-plazanueva.jpg';
import foto3 from '../../../static/assets/images/gettyimages-riabilbao.jpg';
import antxoaTaberna from '../../../static/assets/images/antxoaTaberna.jpg';

const Home = () => {

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
                <img src={antxoaTaberna} width={300} height={250}/>
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

export default Home;







 
 