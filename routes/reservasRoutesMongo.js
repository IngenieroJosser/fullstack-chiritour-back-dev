const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/ReservaController_MongoDB');

// Rutas para reservas
router.post('/', reservaController.createReserva);          // Crear una nueva reserva
router.get('/', reservaController.getReservas);             // Obtener todas las reservas
router.get('/:id', reservaController.getReservaById);       // Obtener una reserva por ID
router.put('/:id', reservaController.updateReserva);        // Actualizar una reserva
router.delete('/:id', reservaController.deleteReserva);     // Eliminar una reserva

module.exports = router;
