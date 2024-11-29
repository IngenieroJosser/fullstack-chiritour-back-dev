const express = require('express');
const router = express.Router();
const routesController = require('../controllers/routesControllerSQL');

/**
 * @swagger
 * /api/routes/:
 *   get:
 *     summary: Obtiene todas las rutas
 *     tags: [routes]
 *     responses:
 *       200:
 *         description: Lista de rutas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_ruta:
 *                     type: integer
 *                     description: ID de la ruta
 *                   nombre:
 *                     type: string
 *                     description: Nombre de la ruta
 *                   id_ubicacion:
 *                     type: integer
 *                     description: ID de la ubicación asociada
 *                   descripcion:
 *                     type: string
 *                     description: Descripción de la ruta
 *                   duracion:
 *                     type: integer
 *                     description: Duración de la ruta
 *                   precio_base:
 *                     type: number
 *                     description: Precio base de la ruta
 *                   imagen_cabecera:
 *                     type: string
 *                     description: Imagen de cabecera de la ruta
 */
router.get('/', routesController.getRoutes);               // Obtener todas las rutas

/**
 * @swagger
 * /api/routes/{id}:
 *   get:
 *     summary: Obtiene una ruta por ID
 *     tags: [routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la ruta
 *     responses:
 *       200:
 *         description: Ruta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_ruta:
 *                   type: integer
 *                   description: ID de la ruta
 *                 nombre:
 *                   type: string
 *                   description: Nombre de la ruta
 *       404:
 *         description: Ruta no encontrada
 */
router.get('/:id', routesController.getRouteById);         // Obtener una ruta por ID

/**
 * @swagger
 * /api/routes/location/{id_ubicacion}:
 *   get:
 *     summary: Obtiene rutas filtradas por ID de ubicación
 *     tags: [routes]
 *     parameters:
 *       - in: path
 *         name: id_ubicacion
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la ubicación por la que filtrar las rutas
 *     responses:
 *       200:
 *         description: Lista de rutas encontradas para la ubicación
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_ruta:
 *                     type: integer
 *                     description: ID de la ruta
 *                   nombre:
 *                     type: string
 *                     description: Nombre de la ruta
 *                   id_ubicacion:
 *                     type: integer
 *                     description: ID de la ubicación asociada
 *       404:
 *         description: No se encontraron rutas para esta ubicación
 */
router.get('/location/:id_ubicacion', routesController.getRoutesByLocation);  // Filtrar rutas por id_ubicacion

/**
 * @swagger
 * /api/routes:
 *   post:
 *     summary: Crea una nueva ruta
 *     tags: [routes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de la ruta
 *               id_ubicacion:
 *                 type: integer
 *                 description: ID de la ubicación asociada
 *               descripcion:
 *                 type: string
 *                 description: Descripción de la ruta
 *               duracion:
 *                 type: integer
 *                 description: Duración de la ruta
 *               precio_base:
 *                 type: number
 *                 description: Precio base de la ruta
 *               imagen_cabecera:
 *                 type: string
 *                 description: Imagen de cabecera de la ruta
 *     responses:
 *       201:
 *         description: Ruta creada exitosamente
 */
router.post('/', routesController.createRoute);    // Crear una nueva ruta

/**
 * @swagger
 * /api/routes/{id}:
 *   put:
 *     summary: Actualiza una ruta existente
 *     tags: [routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la ruta a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de la ruta
 *               id_ubicacion:
 *                 type: integer
 *                 description: ID de la ubicación asociada
 *               descripcion:
 *                 type: string
 *                 description: Descripción de la ruta
 *               duracion:
 *                 type: integer
 *                 description: Duración de la ruta
 *               precio_base:
 *                 type: number
 *                 description: Precio base de la ruta
 *               imagen_cabecera:
 *                 type: string
 *                 description: Imagen de cabecera de la ruta
 *     responses:
 *       200:
 *         description: Ruta actualizada exitosamente
 *       404:
 *         description: Ruta no encontrada
 */
router.put('/:id', routesController.updateRoute);        // Actualizar una ruta

/**
 * @swagger
 * /api/routes/{id}:
 *   delete:
 *     summary: Elimina una ruta
 *     tags: [routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la ruta a eliminar
 *     responses:
 *       200:
 *         description: Ruta eliminada exitosamente
 *       404:
 *         description: Ruta no encontrada
 */
router.delete('/:id', routesController.deleteRoute);        // Eliminar una ruta

module.exports = router;
