const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const reservasRoutes = require('./routes/reservasRoutesMongo');

const app = express();
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/chiritour', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err.message));

// Rutas
app.use('/api/reservas', reservasRoutes);

// Servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
