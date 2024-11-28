const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locationsControllerSQL');
// Rutas para las ubicaciones
/**
 * @swagger
 * /api/locations/:
 *   get:
 *     summary: Obtiene todas las ubicaciones
 *     tags: [locations]
 *     responses:
 *       200:
 *         description: Lista de ubicaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_ubicacion:
 *                     type: integer
 *                     description: ID de la ubicación
 *                   nombre:
 *                     type: string
 *                     description: Nombre de la ubicación
 *                   descripcion:
 *                     type: string
 *                     description: Descripción de la ubicación
 *                   departamento:
 *                     type: string
 *                     description: Departamento de la ubicación
 *                   municipio:
 *                     type: string
 *                     description: Municipio de la ubicación
 *                   imagen_cabecera:
 *                     type: string
 *                     description: Imagen de cabecera de la ubicación
 */
router.get('/', locationsController.getLocations);             // Obtener todas las ubicaciones

/**
 * @swagger
 * /api/locations/{id}:
 *   get:
 *     summary: Obtiene una ubicación por ID
 *     tags: [locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la ubicación
 *     responses:
 *       200:
 *         description: Ubicación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_ubicacion:
 *                   type: integer
 *                   description: ID de la ubicación
 *                 nombre:
 *                   type: string
 *                   description: Nombre de la ubicación
 *       404:
 *         description: Ubicación no encontrada
 */
router.get('/:id', locationsController.getLocationById);       // Obtener una ubicación por ID

/**
 * @swagger
 * /api/locations:
 *   post:
 *     summary: Crea una nueva ubicación
 *     tags: [locations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de la ubicación
 *               descripcion:
 *                 type: string
 *                 description: Descripción de la ubicación
 *               departamento:
 *                 type: string
 *                 description: Departamento de la ubicación
 *               municipio:
 *                 type: string
 *                 description: Municipio de la ubicación
 *               imagen_cabecera:
 *                 type: string
 *                 description: Imagen de cabecera de la ubicación
 *     responses:
 *       201:
 *         description: Ubicación creada exitosamente
 */
router.post('/', locationsController.createLocation);    // Crear una nueva ubicación

/**
 * @swagger
 * /api/locations/{id}:
 *   put:
 *     summary: Actualiza una ubicación existente
 *     tags: [locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la ubicación a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de la ubicación
 *               descripcion:
 *                 type: string
 *                 description: Descripción de la ubicación
 *               departamento:
 *                 type: string
 *                 description: Departamento de la ubicación
 *               municipio:
 *                 type: string
 *                 description: Municipio de la ubicación
 *               imagen_cabecera:
 *                 type: string
 *                 description: Imagen de cabecera de la ubicación
 *     responses:
 *       200:
 *         description: Ubicación actualizada exitosamente
 *       404:
 *         description: Ubicación no encontrada
 */
router.put('/:id', locationsController.updateLocation);        // Actualizar una ubicación

/**
 * @swagger
 * /api/locations/{id}:
 *   delete:
 *     summary: Elimina una ubicación
 *     tags: [locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la ubicación a eliminar
 *     responses:
 *       200:
 *         description: Ubicación eliminada exitosamente
 *       404:
 *         description: Ubicación no encontrada
 */
router.delete('/:id', locationsController.deleteLocation);     // Eliminar una ubicación

module.exports = router;
