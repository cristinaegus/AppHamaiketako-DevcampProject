import React from "react";
import Carousel from '../navigation/carousel';
import Formulario from '../formulario';
import Footer from '../navigation/footer';

import foto1 from '../../../static/assets/images/gettyimages-Guggenheim.jpg';
import foto2 from '../../../static/assets/images/gettyimages-plazanueva.jpg';
import foto3 from '../../../static/assets/images/gettyimages-riabilbao.jpg';
import antxoaTaberna from '../../../static/assets/images/antxoaTaberna.jpg';
import barrapintxos from '../../../static/assets/images/gettyimages-barrapintxos.jpg';
import champis from '../../../static/assets/images/gettyimages-champis.jpg';

const Home = () => {
  const items = [
    <div className="foto1" key="foto1"> 
      <img 
        src={foto1}
        alt="Guggenheim"
        width={612}
        height={407}
      />
    </div>,
    <div className="foto2" key="foto2"> 
      <img 
        src={foto2}
        alt="Plaza Nueva"
        width={612}
        height={407}
      />
    </div>,
    <div className="foto3" key="foto3"> 
      <img 
        src={foto3}
        alt="Ria Bilbao"
        width={612}
        height={407}
      />
    </div>,
  ];

  return (  
    <div className="home-page-wrapper">
      <div className="pagecontent">
        <div className="listabares"> 
          <p>
            La ciudad de Bilbao cuenta con una gran variedad de bares y locales. 
            Algunos en la Plaza Nueva del Casco viejo y otros cerca del centro y la Gran Via.
          </p>
        </div>
        
        <Carousel items={items} />
        
        <div className="right-column">
          <div className="Title">Hamaiketako</div>
          <p>
            ¿Que significa "Hamaiketako"? la traduccion literal es "lo de las once". 
            Es decir tomar algo al medio dia. Esto se ha transformado en la costumbre de "ir de pintxos" 
            en las zonas de Bilbao, donde encontramos rutas de "cocina en miniatura".
            Existen rutas de "pintxos", cada una con su propio estilo. 
            Te gustará sumarte a la experiencia saboreando algunas de esas delicias y pintxos.
            Cuentanos tu experiencia y nos pondremos en contacto contigo
          </p>
          
          <div className="fototitulo">
            <img src={antxoaTaberna} alt="Antxoa Taberna" width={300} height={250}/>
            <img src={barrapintxos} alt="Barra de Pintxos" width={300} height={250}/> 
            <img src={champis} alt="Champis" width={300} height={250}/> 
          </div>
          
          <div className="form">
            <h3>Crea tu ruta y opina sobre ella</h3>
          </div>
          <Formulario />
        </div>
        
        <Footer/>
      </div>
    </div>
  );
};  

export default Home;