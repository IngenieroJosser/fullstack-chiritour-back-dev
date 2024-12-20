const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/Reserva_SQL');
const pagosRoutes = require('./routes/pagosRoutes');
const reservasRoutes = require('./routes/reservasRoutesSQL');
const usersRoutesSQL = require('./routes/usersRoutesSQL');
const dropboxRoutes = require('./routes/dropboxRoutes');
const localitationsRoutes = require('./routes/locationsRoutes');
const routesRoutes = require('./routes/routesRoutesSQL');
const experiencesRoutes = require('./routes/experiencesRoutes');
const bookingsRoutes = require('./routes/bookingsRoutes');
const plansRoutes = require('./routes/plansRoutes');
const buyersRoutes = require('./routes/buyersRoutes');
const quotasRoutes = require('./routes/quotasRoutes');
const multimediaRoutes = require('./routes/multimediasRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const cors = require('cors')
const portInitServ = require('./config.js').portInitServ;

const app = express();
app.use(bodyParser.json());

// Configuración de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());

app.use('/api/pagos', pagosRoutes); // Agregar esta línea para las rutas de pagos
// Rutas
app.use('/api/reservas', reservasRoutes);
app.use('/api/users', usersRoutesSQL);
app.use('/api/dropbox', dropboxRoutes);
app.use('/api/locations', localitationsRoutes);
app.use('/api/routes', routesRoutes);
app.use('/api/experiences', experiencesRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/plans', plansRoutes);
app.use('/api/buyers', buyersRoutes);
app.use('/api/quotas', quotasRoutes);
app.use('/api/multimedia', multimediaRoutes);

// Conexión a la base de datos y servidor
sequelize.sync().then(() => {
  app.listen(portInitServ.port, () => {
console.log(`Servidor corriendo en http://localhost:${portInitServ.port}`);
    console.log(`Servidor corriendo en http://localhost:${portInitServ.port}/api-docs`);
    console.log('Conectado a la base de datos MySQL');
  });
}).catch(err => {
  console.error('Error al conectar a MySQL:', err.message);
});
