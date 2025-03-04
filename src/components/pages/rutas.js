import React from 'react';
import Navbar from '../navigation/navbar';


import elglobo from "../../../static/assets/images/el-globo.jpg";
import antxoTabernaFachada from "../../../static/assets/images/antxoaTabernaFachada.jpg";
import poza from "../../../static/assets/images/poza.jpg";



const Rutas = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="container mt-5">
        
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src= {antxoTabernaFachada} width={225} height={300}></img>  
                <div className="card-body">
                  <h5 className="card-title">Ruta 1</h5>
                  <p className="card-text">Ruta Casco Viejo</p>
                  <button className="btn btn-primary" 
                  onClick={() => window.location.href = "https://www.bilbaoturismo.net/BilbaoTurismo/es/buscador-de-pintxos_2"}>Ver más</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
              <img src= {elglobo} width={225} height={300}></img> 
                <div className="card-body">
                  <h5 className="card-title">Ruta 2</h5>
                  <p className="card-text">Ruta por Diputación y Gran Via</p>
                  <button className="btn btn-primary" 
                  onClick={() => window.location.href = "https://www.bilbaoturismo.net/BilbaoTurismo/es/buscador-de-pintxos_2?zona=1361356724448,1361356724666&tipologia="}>Ver más</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
              <img src= {poza} width={225} height={300}></img> 
                <div className="card-body">
                  <h5 className="card-title">Ruta 3</h5>
                  <p className="card-text">Ruta por Pozas</p>
                  <button className="btn btn-primary" 
                  onClick={() => window.location.href = "https://www.bilbaoturismo.net/BilbaoTurismo/es/buscador-de-pintxos_2?zona=1361356724448,1361356724666,1361356724652&tipologia="}>Ver más</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rutas;