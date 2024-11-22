const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/Reserva_SQL');
const reservasRoutes = require('./routes/reservasRoutesSQL');
const usersRoutesSQL = require('./routes/usersRoutesSQL');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());

// Configuración de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());

// Rutas
app.use('/api/reservas', reservasRoutes);
app.use('/api/users', usersRoutesSQL);

// Conexión a la base de datos y servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
    console.log('Servidor corriendo en http://localhost:3000/api-docs');
    console.log('Conectado a la base de datos MySQL');
  });
}).catch(err => {
  console.error('Error al conectar a MySQL:', err.message);
});
