const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/ReserveController_SQL');

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     description: Permite crear una nueva reserva en el sistema, proporcionando la información necesaria para el destino, fechas, tipo de tour, etc.
 *     tags:
 *       - Reservas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               destino:
 *                 type: string
 *               fecha_inicio:
 *                 type: string
 *                 format: date-time
 *               fecha_fin:
 *                 type: string
 *                 format: date-time
 *               numero_personas:
 *                 type: integer
 *               tipo_tour:
 *                 type: string
 *               transporte:
 *                 type: string
 *               hospedaje:
 *                 type: boolean
 *               alimentacion:
 *                 type: boolean
 *               comentarios:
 *                 type: string
 *               metodo_pago:
 *                 type: string
 *             required:
 *               - destino
 *               - fecha_inicio
 *               - fecha_fin
 *               - numero_personas
 *               - tipo_tour
 *               - metodo_pago
 *           example:
 *             destino: "Playa"
 *             fecha_inicio: "2024-12-30T08:00:00Z"
 *             fecha_fin: "2024-12-31T20:00:00Z"
 *             numero_personas: 4
 *             tipo_tour: "Aventura"
 *             transporte: "Bus"
 *             hospedaje: true
 *             alimentacion: true
 *             comentarios: "Habitaciones cerca del mar"
 *             metodo_pago: "Tarjeta de crédito"
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 destino:
 *                   type: string
 *                   example: "Playa"
 *                 fecha_inicio:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-30T08:00:00Z"
 *                 fecha_fin:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-31T20:00:00Z"
 *                 numero_personas:
 *                   type: integer
 *                   example: 4
 *                 tipo_tour:
 *                   type: string
 *                   example: "Aventura"
 *                 transporte:
 *                   type: string
 *                   example: "Bus"
 *                 hospedaje:
 *                   type: boolean
 *                   example: true
 *                 alimentacion:
 *                   type: boolean
 *                   example: true
 *                 comentarios:
 *                   type: string
 *                   example: "Habitaciones cerca del mar"
 *                 metodo_pago:
 *                   type: string
 *                   example: "Tarjeta de crédito"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-30T08:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-30T08:00:00Z"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal Server Error"
 */
router.post('/', reservaController.createReserva);


/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     description: Obtiene una lista de todas las reservas almacenadas en la base de datos.
 *     tags:
 *       - Reservas
 *     responses:
 *       200:
 *         description: Lista de reservas obtenidas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: El ID de la reserva.
 *                   destino:
 *                     type: string
 *                     description: El destino de la reserva.
 *                   fecha_inicio:
 *                     type: string
 *                     format: date-time
 *                     description: La fecha de inicio de la reserva.
 *                   fecha_fin:
 *                     type: string
 *                     format: date-time
 *                     description: La fecha de fin de la reserva.
 *                   numero_personas:
 *                     type: integer
 *                     description: El número de personas para la reserva.
 *                   tipo_tour:
 *                     type: string
 *                     description: El tipo de tour de la reserva.
 *                   transporte:
 *                     type: string
 *                     description: El tipo de transporte de la reserva.
 *                   hospedaje:
 *                     type: boolean
 *                     description: Si la reserva incluye hospedaje.
 *                   alimentacion:
 *                     type: boolean
 *                     description: Si la reserva incluye alimentación.
 *                   comentarios:
 *                     type: string
 *                     description: Los comentarios adicionales sobre la reserva.
 *                   metodo_pago:
 *                     type: string
 *                     description: El método de pago de la reserva.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: La fecha de creación de la reserva.
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: La fecha de actualización de la reserva.
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Detalle del error ocurrido en el servidor.
 */
router.get('/', reservaController.getReservas);


/**
 * @swagger
 * /api/reservas/get-destination:
 *   get:
 *     summary: Obtener los destinos de las reservas
 *     description: Obtiene una lista de los destinos almacenados en la base de datos para todas las reservas.
 *     tags:
 *       - Reservas
 *     responses:
 *       200:
 *         description: Lista de destinos obtenidos exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   destino:
 *                     type: string
 *                     description: El destino de la reserva.
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   description: Detalle del error ocurrido en el servidor.
 */
router.get('/get-destination', reservaController.getDestinationReserve); // Obtener la lista de destinos para las reserva


/**
 * @swagger
 * /api/reservas/get-routes:
 *   get:
 *     summary: Obtener las rutas de las reservas
 *     description: Obtiene una lista de las rutas almacenadas en la base de datos para las reservas.
 *     tags:
 *       - Reservas
 *     responses:
 *       200:
 *         description: Lista de rutas obtenidas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                     description: El nombre de la ruta.
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   description: Detalle del error ocurrido en el servidor.
 */
router.get('/get-routes', reservaController.getRoutesReserve);


/**
 * @swagger
 * /api/reservas/get-date:
 *   get:
 *     summary: Obtener las fechas de las reservas
 *     description: Obtiene las fechas de inicio de todas las reservas almacenadas en la base de datos.
 *     tags:
 *       - Reservas
 *     responses:
 *       200:
 *         description: Fechas de inicio de las reservas obtenidas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   fecha_inicio:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-12-30T00:00:00Z"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Detalle del error ocurrido en el servidor.
 */
router.get('/get-date', reservaController.getDateReserve);


/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     description: Obtiene una reserva específica basada en el ID proporcionado.
 *     tags:
 *       - Reservas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la reserva que se desea obtener.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Reserva encontrada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID de la reserva.
 *                 destino:
 *                   type: string
 *                   description: El destino de la reserva.
 *                 fecha_inicio:
 *                   type: string
 *                   format: date-time
 *                   description: La fecha de inicio de la reserva.
 *                 fecha_fin:
 *                   type: string
 *                   format: date-time
 *                   description: La fecha de fin de la reserva.
 *                 numero_personas:
 *                   type: integer
 *                   description: El número de personas para la reserva.
 *                 tipo_tour:
 *                   type: string
 *                   description: El tipo de tour para la reserva.
 *                 transporte:
 *                   type: string
 *                   description: El transporte elegido para la reserva.
 *                 hospedaje:
 *                   type: boolean
 *                   description: Si la reserva incluye hospedaje o no.
 *                 alimentacion:
 *                   type: boolean
 *                   description: Si la reserva incluye alimentación o no.
 *                 comentarios:
 *                   type: string
 *                   description: Comentarios adicionales sobre la reserva.
 *                 metodo_pago:
 *                   type: string
 *                   description: El método de pago para la reserva.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: La fecha en la que se creó la reserva.
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: La última fecha de actualización de la reserva.
 *       404:
 *         description: Reserva no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Reserva no encontrada"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Detalle del error ocurrido en el servidor.
 */
router.get('/:id', reservaController.getReservaById);


/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     tags:
 *       - Reservas
 *     summary: Actualiza una reserva existente.
 *     description: Permite actualizar los detalles de una reserva según el ID proporcionado.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la reserva a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               destino:
 *                 type: string
 *                 example: "Parque Nacional"
 *               fecha_inicio:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-30T09:00:00Z"
 *               fecha_fin:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-30T17:00:00Z"
 *               numero_personas:
 *                 type: integer
 *                 example: 5
 *               tipo_tour:
 *                 type: string
 *                 example: "Aventura"
 *               transporte:
 *                 type: string
 *                 example: "Bus"
 *               hospedaje:
 *                 type: boolran
 *                 example: "1 - 0"
 *               alimentacion:
 *                 type: string
 *                 example: "1 - 0"
 *               comentarios:
 *                 type: string
 *                 example: "Incluir guía turístico."
 *               metodo_pago:
 *                 type: string
 *                 example: "Tarjeta de crédito"
 *     responses:
 *       200:
 *         description: Reserva actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Reserva actualizada"
 *       404:
 *         description: Reserva no encontrada para el ID proporcionado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Reserva no encontrada"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error en la actualización de la reserva."
 */
router.put('/:id', reservaController.updateReserva);


/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva
 *     description: Elimina una reserva específica basada en el ID proporcionado.
 *     tags:
 *       - Reservas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la reserva que se desea eliminar.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Reserva eliminada"
 *       404:
 *         description: Reserva no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Reserva no encontrada"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Detalle del error ocurrido en el servidor.
 */
router.delete('/:id', reservaController.deleteReserva);

module.exports = router;
