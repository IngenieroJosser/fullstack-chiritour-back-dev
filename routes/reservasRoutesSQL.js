const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/ReserveController_SQL');

// const routerMongo = express.Router();
// const reservaControllerMongo = require('../controllers/ReservaController_MongoDB');

// Rutas para las reservas
router.post('/', reservaController.createReserva);          // Crear una nueva reserva
router.get('/', reservaController.getReservas);             // Obtener todas las reservas
router.get('/:id', reservaController.getReservaById);       // Obtener una reserva por ID
router.put('/:id', reservaController.updateReserva);        // Actualizar una reserva
router.delete('/:id', reservaController.deleteReserva);     // Eliminar una reserva

// Rutas para las reservas Mongo
// routerMongo.post('/', reservaControllerMongo.createReserva);          // Crear una nueva reserva
// routerMongo.get('/', reservaControllerMongo.getReservas);             // Obtener todas las reservas
// routerMongo.get('/:id', reservaControllerMongo.getReservaById);       // Obtener una reserva por ID
// routerMongo.put('/:id', reservaControllerMongo.updateReserva);        // Actualizar una reserva
// routerMongo.delete('/:id', reservaControllerMongo.deleteReserva);     // Eliminar una reserva

module.exports = router;
// module.exports = routerMongo;