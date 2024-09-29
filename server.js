import react from 'react';
import Mysql from 'mysql';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'hamaiketakobaresdb',
});

connection.connect((error) => {
  if (error) {
    console.error('Error de conexión:', error);
    return;
  }
  console.log('Conectado a la base de datos');
});

app.get('/hamaiketakobardb', (request, response) => {
  connection.query('SELECT * FROM hamaiketakobardb', (error, results) => {
    if (error) {
      console.error('Error al obtener las tarjetas:', error);
      response.status(500).send({ message: 'Error al obtener las tarjetas' });
    } else {
      response.send(results);
    }
  })
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});