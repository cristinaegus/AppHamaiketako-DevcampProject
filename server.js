import mysql from 'mysql';
import express from 'express';
import cors  from 'cors';

const app = express();

app.use(cors());
app.use(express.json());



const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'apphamaiketako.formopinion',
});



connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});
app.post('/formopinion', (req, res) => {
  const { nombrebar, comentario } = req.body;
  const query = 'INSERT INTO formopinion (nombrebar, comentario) VALUES (?, ?)';
  const params = [nombrebar, comentario];

  connection.query(query, params, (err, results) => {
    if (err) {
      console.error('Error al guardar los datos:', err);
      res.status(500).send({ message: 'Error al guardar los datos' });
    } else {
      console.log('Datos guardados correctamente:', results);
      res.status(200).send({ message: 'Datos guardados correctamente', data: results });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});