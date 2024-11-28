const express = require('express');
const router = express.Router();
const quotasController = require('../controllers/quotasController');

/**
 * @swagger
 * /api/quotas:
 *   get:
 *     summary: Obtiene todos los cupos
 *     tags: [quotas]
 *     responses:
 *       200:
 *         description: Lista de todos los cupos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_cupo:
 *                     type: integer
 *                     description: ID del cupo
 *                   id_reserva:
 *                     type: integer
 *                     description: ID de la reserva
 *                   nombre_persona:
 *                     type: string
 *                     description: Nombre de la persona
 *                   numero_asiento:
 *                     type: integer
 *                     description: Número de asiento
 *                   turno:
 *                     type: string
 *                     description: Turno
 *                   rango_edad:
 *                     type: string
 *                     description: Rango de edad
 */
router.get('/', quotasController.getAllQuotas);

/**
 * @swagger
 * /api/quotas/reservation/{id_reserva}:
 *   get:
 *     summary: Busca cupos por id_reserva
 *     tags: [quotas]
 *     parameters:
 *       - in: path
 *         name: id_reserva
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Lista de cupos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_cupo:
 *                     type: integer
 *                     description: ID del cupo
 *                   id_reserva:
 *                     type: integer
 *                     description: ID de la reserva
 *                   nombre_persona:
 *                     type: string
 *                     description: Nombre de la persona
 *                   numero_asiento:
 *                     type: integer
 *                     description: Número de asiento
 *                   turno:
 *                     type: string
 *                     description: Turno
 *                   rango_edad:
 *                     type: string
 *                     description: Rango de edad
 */
router.get('/reservation/:id_reserva', quotasController.getQuotasByReservation);

/**
 * @swagger
 * /api/quotas:
 *   post:
 *     summary: Crea un nuevo cupo
 *     tags: [quotas]
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
 *               nombre_persona:
 *                 type: string
 *                 description: Nombre de la persona
 *               numero_asiento:
 *                 type: integer
 *                 description: Número de asiento
 *               turno:
 *                 type: string
 *                 description: Turno (Mañana, Tarde, Noche)
 *               rango_edad:
 *                 type: string
 *                 description: Rango de edad (Niño, Joven, Adulto, Mayor)
 *     responses:
 *       201:
 *         description: Cupo creado exitosamente
 */
router.post('/', quotasController.createQuota);

/**
 * @swagger
 * /api/quotas/{id_cupo}:
 *   put:
 *     summary: Actualiza un cupo por id_cupo
 *     tags: [quotas]
 *     parameters:
 *       - in: path
 *         name: id_cupo
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cupo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_persona:
 *                 type: string
 *                 description: Nombre de la persona
 *               numero_asiento:
 *                 type: integer
 *                 description: Número de asiento
 *               turno:
 *                 type: string
 *                 description: Turno
 *               rango_edad:
 *                 type: string
 *                 description: Rango de edad
 *     responses:
 *       200:
 *         description: Cupo actualizado
 */
router.put('/:id_cupo', quotasController.updateQuota);

/**
 * @swagger
 * /api/quotas/{id_cupo}:
 *   delete:
 *     summary: Elimina un cupo por id_cupo
 *     tags: [quotas]
 *     parameters:
 *       - in: path
 *         name: id_cupo
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cupo
 *     responses:
 *       200:
 *         description: Cupo eliminado exitosamente
 */
router.delete('/:id_cupo', quotasController.deleteQuota);

module.exports = router;
