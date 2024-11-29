const express = require('express');
const router = express.Router();
const experiencesController = require('../controllers/experiencesControllerSQL');

/**
 * @swagger
 * /api/experiences/:
 *   get:
 *     summary: Obtiene todas las experiencias
 *     tags: [experiences]
 *     responses:
 *       200:
 *         description: Lista de experiencias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_experiencia:
 *                     type: integer
 *                     description: ID de la experiencia
 *                   id_ruta:
 *                     type: integer
 *                     description: ID de la ruta asociada
 *                   fecha_realizacion:
 *                     type: string
 *                     format: date
 *                     description: Fecha de realización
 *                   capacidad:
 *                     type: integer
 *                     description: Capacidad de la experiencia
 *                   estado:
 *                     type: string
 *                     enum: [Disponible, No disponible]
 *                     description: Estado de la experiencia
 */
router.get('/', experiencesController.getAllExperiences);

/**
 * @swagger
 * /api/experiences/{id_experiencia}:
 *   get:
 *     summary: Obtiene una experiencia por ID
 *     tags: [experiences]
 *     parameters:
 *       - in: path
 *         name: id_experiencia
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la experiencia
 *     responses:
 *       200:
 *         description: Experiencia encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_experiencia:
 *                   type: integer
 *                 id_ruta:
 *                   type: integer
 *                 fecha_realizacion:
 *                   type: string
 *                   format: date
 *                 capacidad:
 *                   type: integer
 *                 estado:
 *                   type: string
 *                   enum: [Disponible, No disponible]
 *       404:
 *         description: Experiencia no encontrada
 */
router.get('/:id_experiencia', experiencesController.getExperienceById);

/**
 * @swagger
 * /api/experiences/route/{id_ruta}:
 *   get:
 *     summary: Obtiene experiencias filtradas por ID de ruta
 *     tags: [experiences]
 *     parameters:
 *       - in: path
 *         name: id_ruta
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la ruta por la que filtrar las experiencias
 *     responses:
 *       200:
 *         description: Lista de experiencias encontradas para la ruta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_experiencia:
 *                     type: integer
 *                   id_ruta:
 *                     type: integer
 *                   fecha_realizacion:
 *                     type: string
 *                     format: date
 *                   capacidad:
 *                     type: integer
 *                   estado:
 *                     type: string
 *                     enum: [Disponible, No disponible]
 *       404:
 *         description: No se encontraron experiencias para esta ruta
 */
router.get('/route/:id_ruta', experiencesController.getExperiencesByRoute);

/**
 * @swagger
 * /api/experiences:
 *   post:
 *     summary: Crea una nueva experiencia
 *     tags: [experiences]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_ruta:
 *                 type: integer
 *                 description: ID de la ruta asociada
 *               fecha_realizacion:
 *                 type: string
 *                 format: date
 *                 description: Fecha de realización
 *               capacidad:
 *                 type: integer
 *                 description: Capacidad de la experiencia
 *               estado:
 *                 type: string
 *                 enum: [Disponible, No disponible]
 *     responses:
 *       201:
 *         description: Experiencia creada exitosamente
 */
router.post('/', experiencesController.createExperience);

/**
 * @swagger
 * /api/experiences/{id_experiencia}:
 *   put:
 *     summary: Actualiza una experiencia existente
 *     tags: [experiences]
 *     parameters:
 *       - in: path
 *         name: id_experiencia
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la experiencia a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_ruta:
 *                 type: integer
 *               fecha_realizacion:
 *                 type: string
 *                 format: date
 *               capacidad:
 *                 type: integer
 *               estado:
 *                 type: string
 *                 enum: [Disponible, No disponible]
 *     responses:
 *       200:
 *         description: Experiencia actualizada exitosamente
 *       404:
 *         description: Experiencia no encontrada
 */
router.put('/:id_experiencia', experiencesController.updateExperience);

/**
 * @swagger
 * /api/experiences/{id_experiencia}:
 *   delete:
 *     summary: Elimina una experiencia
 *     tags: [experiences]
 *     parameters:
 *       - in: path
 *         name: id_experiencia
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la experiencia a eliminar
 *     responses:
 *       200:
 *         description: Experiencia eliminada exitosamente
 *       404:
 *         description: Experiencia no encontrada
 */
router.delete('/:id_experiencia', experiencesController.deleteExperience);

module.exports = router;
