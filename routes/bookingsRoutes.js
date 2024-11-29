const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingsController');

/**
 * @swagger
 * /api/bookings/:
 *   get:
 *     summary: Obtiene todas las reservas
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_reserva:
 *                     type: integer
 *                     description: ID de la reserva
 *                   id_ruta:
 *                     type: integer
 *                     description: ID de la ruta asociada
 *                   id_experiencia:
 *                     type: integer
 *                     description: ID de la experiencia asociada
 *                   fecha_reserva:
 *                     type: string
 *                     format: date
 *                     description: Fecha de la reserva
 */
router.get('/', bookingsController.getAllBookings);

/**
 * @swagger
 * /api/bookings/{id_reserva}:
 *   get:
 *     summary: Obtiene una reserva por ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id_reserva
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/:id_reserva', bookingsController.getBookingById);

/**
 * @swagger
 * /api/bookings/route/{id_ruta}:
 *   get:
 *     summary: Obtiene reservas por ID de ruta
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id_ruta
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la ruta asociada
 *     responses:
 *       200:
 *         description: Lista de reservas para la ruta
 *       404:
 *         description: No se encontraron reservas para la ruta
 */
router.get('/route/:id_ruta', bookingsController.getBookingsByRoute);

/**
 * @swagger
 * /api/bookings/experience/{id_experiencia}:
 *   get:
 *     summary: Obtiene reservas por ID de experiencia
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id_experiencia
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la experiencia asociada
 *     responses:
 *       200:
 *         description: Lista de reservas para la experiencia
 *       404:
 *         description: No se encontraron reservas para la experiencia
 */
router.get('/experience/:id_experiencia', bookingsController.getBookingsByExperience);

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Crea una nueva reserva
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_ruta:
 *                 type: integer
 *               id_experiencia:
 *                 type: integer
 *               fecha_reserva:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 */
router.post('/', bookingsController.createBooking);

/**
 * @swagger
 * /api/bookings/{id_reserva}:
 *   put:
 *     summary: Actualiza una reserva
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id_reserva
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Reserva actualizada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
router.put('/:id_reserva', bookingsController.updateBooking);

/**
 * @swagger
 * /api/bookings/{id_reserva}:
 *   delete:
 *     summary: Elimina una reserva
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id_reserva
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva a eliminar
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id_reserva', bookingsController.deleteBooking);

module.exports = router;
