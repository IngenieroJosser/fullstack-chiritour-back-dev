const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});