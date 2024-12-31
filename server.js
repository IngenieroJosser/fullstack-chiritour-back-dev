const express = require('express');
const path = require('path'); // Asegúrate de importar el módulo 'path'
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models/Reserva_SQL');
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

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configuración de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la API
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

// Manejar todas las rutas no definidas y devolver el archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Conexión a la base de datos y servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
    console.log('Documentación de la API en http://localhost:3000/api-docs');
    console.log('Conectado a la base de datos MySQL server');
  });
}).catch(err => {
  console.error('Error al conectar a MySQL:', err.message);
});
