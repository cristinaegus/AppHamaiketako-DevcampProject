

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



app.post('/formulario', (req, res) => {
  const { nombrebar, comentario } = req.body;
  const query = 'INSERT INTO formulario (nombrebar,comentario) VALUES (?, ?, ?)';
  db.query(query, [nombrebar, comentario], (err, results) => {
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