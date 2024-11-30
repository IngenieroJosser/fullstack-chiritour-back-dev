const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/ReserveController_SQL');

/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: API para gestionar reservas
 */

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crea una nueva reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 description: Fecha de la reserva
 *               cliente:
 *                 type: string
 *                 description: Nombre del cliente
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.post('/', reservaController.createReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtiene todas las reservas
 *     tags: [Reservas]
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
 *                   id:
 *                     type: integer
 *                     description: ID de la reserva
 *                   fecha:
 *                     type: string
 *                     format: date
 *                     description: Fecha de la reserva
 *                   cliente:
 *                     type: string
 *                     description: Nombre del cliente
 *       500:
 *         description: Error en el servidor
 */
router.get('/', reservaController.getReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtiene una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Datos de la reserva
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID de la reserva
 *                 fecha:
 *                   type: string
 *                   format: date
 *                   description: Fecha de la reserva
 *                 cliente:
 *                   type: string
 *                   description: Nombre del cliente
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.get('/:id', reservaController.getReservaById);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualiza una reserva
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 description: Fecha de la reserva
 *               cliente:
 *                 type: string
 *                 description: Nombre del cliente
 *     responses:
 *       200:
 *         description: Reserva actualizada
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', reservaController.updateReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Elimina una reserva
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.delete('/:id', reservaController.deleteReserva);

module.exports = router;
