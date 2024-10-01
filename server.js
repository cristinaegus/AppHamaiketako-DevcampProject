import react from 'react';
import Mysql from 'mysql';


const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'apphamaiketako.formulario',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

app.use(express.json());

app.post('/formulario', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  const query = 'INSERT INTO formulario (nombre, email, mensaje) VALUES (?, ?, ?)';
  db.query(query, [nombre, email, mensaje], (err, results) => {
    if (err) {
      console.error('Error al guardar los datos:', err);
      res.status(500).send({ message: 'Error al guardar los datos' });
    } else {
      res.send({ message: 'Datos guardados correctamente' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});