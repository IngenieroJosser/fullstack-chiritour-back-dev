const express = require('express');
const router = express.Router();
const multimediaController = require('../controllers/multimediaController');

// Rutas para el multimedia

/**
 * @swagger
 * /api/multimedia/:
 *   get:
 *     summary: Obtiene todos los multimedia
 *     tags: [multimedia]
 *     responses:
 *       200:
 *         description: Lista de multimedia
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_multimedia:
 *                     type: integer
 *                     description: ID del multimedia
 *                   related_type:
 *                     type: string
 *                     description: Tipo relacionado (location, route, booking, experience)
 *                   related_id:
 *                     type: integer
 *                     description: ID relacionado con el tipo (location, route, etc.)
 *                   type:
 *                     type: string
 *                     description: Tipo de multimedia (por ejemplo, imagen, video)
 *                   url:
 *                     type: string
 *                     description: URL del multimedia
 */
router.get('/', multimediaController.getMultimedia);  // Obtener todos los multimedia

/**
 * @swagger
 * /api/multimedia/{id}:
 *   get:
 *     summary: Obtiene un multimedia por ID
 *     tags: [multimedia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del multimedia
 *     responses:
 *       200:
 *         description: Multimedia encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_multimedia:
 *                   type: integer
 *                   description: ID del multimedia
 *                 related_type:
 *                   type: string
 *                   description: Tipo relacionado (location, route, booking, experience)
 *                 related_id:
 *                   type: integer
 *                   description: ID relacionado con el tipo (location, route, etc.)
 *                 type:
 *                   type: string
 *                   description: Tipo de multimedia (por ejemplo, imagen, video)
 *                 url:
 *                   type: string
 *                   description: URL del multimedia
 *       404:
 *         description: Multimedia no encontrado
 */
router.get('/:id', multimediaController.getMultimediaById);  // Obtener un multimedia por ID

/**
 * @swagger
 * /api/multimedia/related/{related_id}:
 *   get:
 *     summary: Obtiene multimedia por related_id
 *     tags: [multimedia]
 *     parameters:
 *       - in: path
 *         name: related_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID relacionado con el tipo (location, route, etc.)
 *     responses:
 *       200:
 *         description: Lista de multimedia encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_multimedia:
 *                     type: integer
 *                     description: ID del multimedia
 *                   related_type:
 *                     type: string
 *                     description: Tipo relacionado (location, route, booking, experience)
 *                   related_id:
 *                     type: integer
 *                     description: ID relacionado con el tipo (location, route, etc.)
 *                   type:
 *                     type: string
 *                     description: Tipo de multimedia (por ejemplo, imagen, video)
 *                   url:
 *                     type: string
 *                     description: URL del multimedia
 *       404:
 *         description: No se encontró multimedia para este related_id
 */
router.get('/related/:related_id', multimediaController.getMultimediaByRelatedId);  // Obtener multimedia por related_id

/**
 * @swagger
 * /api/multimedia:
 *   post:
 *     summary: Crea un nuevo multimedia
 *     tags: [multimedia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               related_type:
 *                 type: string
 *                 description: Tipo relacionado (location, route, booking, experience)
 *               related_id:
 *                 type: integer
 *                 description: ID relacionado con el tipo (location, route, etc.)
 *               type:
 *                 type: string
 *                 description: Tipo de multimedia (por ejemplo, imagen, video)
 *               url:
 *                 type: string
 *                 description: URL del multimedia
 *     responses:
 *       201:
 *         description: Multimedia creado exitosamente
 */
router.post('/', multimediaController.createMultimedia);  // Crear un nuevo multimedia

/**
 * @swagger
 * /api/multimedia/{id}:
 *   put:
 *     summary: Actualiza un multimedia existente
 *     tags: [multimedia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del multimedia a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               related_type:
 *                 type: string
 *                 description: Tipo relacionado (location, route, booking, experience)
 *               related_id:
 *                 type: integer
 *                 description: ID relacionado con el tipo (location, route, etc.)
 *               type:
 *                 type: string
 *                 description: Tipo de multimedia (por ejemplo, imagen, video)
 *               url:
 *                 type: string
 *                 description: URL del multimedia
 *     responses:
 *       200:
 *         description: Multimedia actualizado exitosamente
 *       404:
 *         description: Multimedia no encontrado
 */
router.put('/:id', multimediaController.updateMultimedia);  // Actualizar un multimedia

/**
 * @swagger
 * /api/multimedia/{id}:
 *   delete:
 *     summary: Elimina un multimedia
 *     tags: [multimedia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del multimedia a eliminar
 *     responses:
 *       200:
 *         description: Multimedia eliminado exitosamente
 *       404:
 *         description: Multimedia no encontrado
 */
router.delete('/:id', multimediaController.deleteMultimedia);  // Eliminar un multimedia

module.exports = router;