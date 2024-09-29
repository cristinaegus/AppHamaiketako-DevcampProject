import React from 'react';
import Navbar from '../navigation/navbar';
import logo01 from "../../../static/assets/images/logo01.png";


const Rutas = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="container mt-5">
        
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src= {logo01} width={200} height={200}></img>
                <div className="card-body">
                  <h5 className="card-title">Ruta 1</h5>
                  <p className="card-text">Descripción de la ruta 1</p>
                  <button className="btn btn-primary">Ver más</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://picsum.photos/200/301" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Ruta 2</h5>
                  <p className="card-text">Descripción de la ruta 2</p>
                  <button className="btn btn-primary">Ver más</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://picsum.photos/200/302" className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Ruta 3</h5>
                  <p className="card-text">Descripción de la ruta 3</p>
                  <button className="btn btn-primary">Ver más</button>
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