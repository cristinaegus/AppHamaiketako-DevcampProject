import React, { useState, useEffect } from 'react';

const Tarjetas = () => {
  const [hamaiketakobaresdb, setHamaiketakobaresdb] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/hamaiketakobaresdb')
      .then(response => response.json())
      .then(data => setHamaiketakobaresdb(data));
  }, []);

  return (
    <div>
      {hamaiketakobaresdb.map((producto) => (
        <div key={hamaiketakobaresdb.id} className="tarjeta">
          <h2>{hamaiketakobaresdb.nombre}Nombre Bar</h2>
          <p>{hamaiketakobaresdb.direccion}Direccion</p>
          <p>{hamaiketakobaresdb.telefono}Telefono</p>
          <p>{hamaiketakobaresdb.email}Email</p>
          <p>{hamaiketakobaresdb.web}Web</p>
          <p>{hamaiketakobaresdb.url_link_map}url_link_map</p>
          <p>{hamaiketakobaresdb.descripcion}Descripción</p>
        </div>
      ))}
    </div>
  );
};

export default Tarjetas;