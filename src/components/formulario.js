import React, { useState } from 'react';
import axios from 'axios';
const Formulario = () => {
    // Estado para almacenar los datos del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
  
    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
      event.preventDefault();
      const datos = { nombre, email, mensaje };
      axios.post('http://localhost:3000/formulario', datos)
        .then((response) => {
          console.log('Datos guardados correctamente:', response.data);
        })
        .catch((error) => {
          console.error('Error al guardar los datos:', error);
        });
    };
  
    return (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
          <br />
          <label>Email:</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <br />
          <label>Mensaje:</label>
          <textarea value={mensaje} onChange={(event) => setMensaje(event.target.value)} />
          <br />
          <button type="submit">Enviar</button>
        </form>
      );
    }
    export default Formulario;