import React from 'react';
import elglobo from "../../../static/assets/images/el-globo.jpg";
import antxoTabernaFachada from "../../../static/assets/images/antxoaTabernaFachada.jpg";
import poza from "../../../static/assets/images/poza.jpg";

const Rutas = () => {
  return (
    <div className="container">
      <h2>Rutas de Pintxos en Bilbao</h2>
      <div className="row">
        <div className="card-container">
          <img 
            src={antxoTabernaFachada} 
            className="card-img"
            alt="Antxoa Taberna Fachada - Casco Viejo"
          />  
          <h5 className="card-title">Ruta Casco Viejo</h5>
          <p className="card-description">Descubre los mejores pintxos en el corazón histórico de Bilbao</p>
          <a 
            href="https://www.bilbaoturismo.net/BilbaoTurismo/es/buscador-de-pintxos_2"
            className="card-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más
          </a>
        </div>
        
        <div className="card-container">
          <img 
            src={elglobo} 
            className="card-img"
            alt="El Globo - Diputación y Gran Via"
          /> 
          <h5 className="card-title">Ruta Diputación y Gran Via</h5>
          <p className="card-description">Explora la gastronomía en la zona más elegante de la ciudad</p>
          <a 
            href="https://www.bilbaoturismo.net/BilbaoTurismo/es/buscador-de-pintxos_2?zona=1361356724448,1361356724666&tipologia="
            className="card-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más
          </a>
        </div>
        
        <div className="card-container">
          <img 
            src={poza} 
            className="card-img"
            alt="Poza - Zona de Pozas"
          /> 
          <h5 className="card-title">Ruta Pozas</h5>
          <p className="card-description">Disfruta del ambiente más auténtico en la zona de Pozas</p>
          <a 
            href="https://www.bilbaoturismo.net/BilbaoTurismo/es/buscador-de-pintxos_2?zona=1361356724448,1361356724666,1361356724652&tipologia="
            className="card-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rutas;