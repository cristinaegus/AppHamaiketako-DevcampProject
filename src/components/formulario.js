import React, { useState } from 'react';
const Formulario = () => {
    // Estado para almacenar los datos del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
  
    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Formulario enviado:', { nombre, email, mensaje });
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