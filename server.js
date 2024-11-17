const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/Reserva_SQL');
const reservasRoutes = require('./routes/reservasRoutesSQL');

const app = express();
app.use(bodyParser.json());

// Rutas
app.use('/api/reservas', reservasRoutes);

// Conexión a la base de datos y servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
    console.log('Conectado a la base de datos MySQL');
  });
}).catch(err => {
  console.error('Error al conectar a MySQL:', err.message);
});
