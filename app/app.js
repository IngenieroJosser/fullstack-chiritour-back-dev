const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('../models/Reserva_SQL.js');
const pagosRoutes = require('../routes/pagosRoutes.js');
const reservasRoutes = require('../routes/reservasRoutesSQL.js');
const usersRoutesSQL = require('../routes/usersRoutesSQL.js');
const dropboxRoutes = require('../routes/dropboxRoutes.js');
const localitationsRoutes = require('../routes/locationsRoutes.js');
const routesRoutes = require('../routes/routesRoutesSQL.js');
const experiencesRoutes = require('../routes/experiencesRoutes.js');
const bookingsRoutes = require('../routes/bookingsRoutes.js');
const plansRoutes = require('../routes/plansRoutes.js');
const buyersRoutes = require('../routes/buyersRoutes.js');
const quotasRoutes = require('../routes/quotasRoutes.js');
const multimediaRoutes = require('../routes/multimediasRoutes.js');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger.js');
const cors = require('cors')
const portInitServ = require('../config.js').portInitServ;

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
