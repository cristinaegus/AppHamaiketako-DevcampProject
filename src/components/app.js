import React, { useEffect, useRef, useState } from 'react';

import foto1 from '../../static/assets/images/gettyimages-Guggenheim.jpg';
import foto2 from '../../static/assets/images/gettyimages-plazanueva.jpg';
import foto3 from '../../static/assets/images/gettyimages-riabilbao.jpg';
import antxoa from '../../static/assets/images/antxoaTaberna.jpg';
import Navbar from './navbar';

import Carousel from './carousel';

 
function App() {
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
                Existen rutas de “pintxos” en zonas determinadas de la ciudad,
                cada una con su propio estilo, y siguen el mismo camino que las del “txikiteo”. 
                Te gustará sumarte a la experiencia saboreando algunas de esas delicias y pintxos.
                Aqui te propongo unas ideas para rutas de pintxos por el centro de Bilbao</p>
                <div className="fototitulo">
                    <img src={antxoa} width={400} height={350}/>
                </div>
            </div>      
          </div>
        </div>
    </div>
  );
}

export default App;
  