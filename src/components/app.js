import React, { useEffect, useRef, useState } from 'react';

import Rutas from "./pages/rutas";
import Blog from "./pages/blog";
import Home from "./pages/home";

import Navbar from './navigation/navbar';

import Carousel from './navigation/carousel';

function App() {
  const items = [
    <div className="foto1"> 
      <img src ="https://devcamp-space.s3.amazonaws.com/QjnYVjHdyrAGAdHYzR66AuGf?response-content-disposition=inline%3B%20filename%3D%22gettyimages-Guggenheim.jpg%22%3B%20filename%2A%3DUTF-8%27%27gettyimages-Guggenheim.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20240924%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240924T083402Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=1d6ca7b5cc7727156825326b2438cb4bcc427a8d08b60ec0e9a68ddbce5ed60d" width={612} height={407}/> 
    </div>,
      <div className="foto2"> 
    <img src ='https://devcamp-space.s3.amazonaws.com/BGygVwz3rcmqmU4ShfrtLjre?response-content-disposition=inline%3B%20filename%3D%22gettyimages-laribera.jpg%22%3B%20filename%2A%3DUTF-8%27%27gettyimages-laribera.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20240924%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240924T083402Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=023e04caeb0ae39523bdea8a5735bf6aad64805af18113b607e6f133d0cdf2c5' width={612} height={407}/> 
      </div>,
    <div className="foto3"> 
      <img src ='https://devcamp-space.s3.amazonaws.com/irJDHq62LM9WmbpoDaA3fmHe?response-content-disposition=inline%3B%20filename%3D%22baster-bilbao.jpg%22%3B%20filename%2A%3DUTF-8%27%27baster-bilbao.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20240924%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240924T083402Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=b10227692cd4b0a9a6b45606e69ccae7d8405782edf5adc603fb5c72d1f7896c' width={600} height={400}/> 
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
                    <img src='https://devcamp-space.s3.amazonaws.com/RjRckX5SsY3u58WBxVJieEkw?response-content-disposition=inline%3B%20filename%3D%22antxoaTaberna.jpg%22%3B%20filename%2A%3DUTF-8%27%27antxoaTaberna.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20240924%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240924T083402Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a2f899430bc267b025c21a5b52250f6f8c37c99b7ab38593b198be61be3a74fa'width={400} height={350}></img>
                </div>
            </div>      
          </div>
        </div>
    </div>
  );
}

export default App;
  
