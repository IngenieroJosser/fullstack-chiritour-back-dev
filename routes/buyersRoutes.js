const express = require('express');
const router = express.Router();
const buyersController = require('../controllers/buyersController');

/**
 * @swagger
 * /api/buyers:
 *   get:
 *     summary: Obtiene todos los compradores
 *     tags: [buyers]
 *     responses:
 *       200:
 *         description: Lista de todos los compradores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_comprador:
 *                     type: integer
 *                     description: ID del comprador
 *                   id_reserva:
 *                     type: integer
 *                     description: ID de la reserva
 *                   nombre:
 *                     type: string
 *                     description: Nombre del comprador
 *                   telefono:
 *                     type: string
 *                     description: Teléfono del comprador
 *                   email:
 *                     type: string
 *                     description: Email del comprador
 */
router.get('/', buyersController.getAllBuyers);

/**
 * @swagger
 * /api/buyers/reservation/{id_reserva}:
 *   get:
 *     summary: Busca compradores por id_reserva
 *     tags: [buyers]
 *     parameters:
 *       - in: path
 *         name: id_reserva
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Lista de compradores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_comprador:
 *                     type: integer
 *                     description: ID del comprador
 *                   id_reserva:
 *                     type: integer
 *                     description: ID de la reserva
 *                   nombre:
 *                     type: string
 *                     description: Nombre del comprador
 *                   telefono:
 *                     type: string
 *                     description: Teléfono del comprador
 *                   email:
 *                     type: string
 *                     description: Email del comprador
 */
router.get('/reservation/:id_reserva', buyersController.getBuyersByReservation);

/**
 * @swagger
 * /api/buyers:
 *   post:
 *     summary: Crea un nuevo comprador
 *     tags: [buyers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_reserva:
 *                 type: integer
 *                 description: ID de la reserva asociada
 *               nombre:
 *                 type: string
 *                 description: Nombre del comprador
 *               telefono:
 *                 type: string
 *                 description: Teléfono del comprador
 *               email:
 *                 type: string
 *                 description: Email del comprador
 *     responses:
 *       201:
 *         description: Comprador creado exitosamente
 */
router.post('/', buyersController.createBuyer);

/**
 * @swagger
 * /api/buyers/{id_comprador}:
 *   put:
 *     summary: Actualiza un comprador por id_comprador
 *     tags: [buyers]
 *     parameters:
 *       - in: path
 *         name: id_comprador
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del comprador a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_reserva:
 *                 type: integer
 *                 description: ID de la reserva asociada
 *               nombre:
 *                 type: string
 *                 description: Nombre del comprador
 *               telefono:
 *                 type: string
 *                 description: Teléfono del comprador
 *               email:
 *                 type: string
 *                 description: Email del comprador
 *     responses:
 *       200:
 *         description: Comprador actualizado exitosamente
 *       404:
 *         description: Comprador no encontrado
 */
router.put('/:id_comprador', buyersController.updateBuyer);

/**
 * @swagger
 * /api/buyers/{id_comprador}:
 *   delete:
 *     summary: Elimina un comprador por id_comprador
 *     tags: [buyers]
 *     parameters:
 *       - in: path
 *         name: id_comprador
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del comprador a eliminar
 *     responses:
 *       200:
 *         description: Comprador eliminado exitosamente
 *       404:
 *         description: Comprador no encontrado
 */
router.delete('/:id_comprador', buyersController.deleteBuyer);

module.exports = router;
