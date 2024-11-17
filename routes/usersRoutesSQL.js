const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllerSQL');

// Rutas para los usuarios
/**
 * @swagger
 * /api/users/:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del usuario
 *                   name:
 *                     type: string
 *                     description: Nombre del usuario
 *                   email:
 *                     type: string
 *                     description: email del usuario
 *                   password:
 *                     type: string
 *                     description: contraseña del usuario
 *                   categoria:
 *                     type: string
 *                     description: Categoría del usuario
 *                   rol:
 *                     type: string
 *                     description: Rol del usuario
 *                   createdAt:
 *                     type: string
 *                     format: date
 *                     description: Fecha de creación del usuario
 *                   updatedAt:
 *                     type: string
 *                     format: date
 *                     description: Fecha de actualización del usuario
 */
router.get('/', usersController.getUsers);             // Obtener todos los usuarios

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del usuario
 *                 nombre:
 *                   type: string
 *                   description: Nombre del cliente
 *       404:
 *         description: usuario no encontrado
 */
router.get('/:id', usersController.getUserById);       // Obtener un usuario por ID

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crea una nueva usuario
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *               email:
 *                 type: string
 *                 description: email del usuario
 *               password:
 *                 type: string
 *                 description: contraseña del usuario
 *               categoria:
 *                 type: string
 *                 description: Categoría del usuario
 *               rol:
 *                 type: string
 *                 description: Rol del usuario
 *               createdAt:
 *                 type: string
 *                 format: date
 *                 description: Fecha de creación del usuario
 *               updatedAt:
 *                 type: string
 *                 format: date
 *                 description: Fecha de actualización del usuario
 *              
 *     responses:
 *       201:
 *         description: usuario creada exitosamente
 */
router.post('/', usersController.createUser);    // Crear un nuevo usuario

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualiza una usuario existente
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *               email:
 *                 type: string
 *                 description: email del usuario
 *               password:
 *                 type: string
 *                 description: contraseña del usuario
 *               categoria:
 *                 type: string
 *                 description: Categoría del usuario
 *               rol:
 *                 type: string
 *                 description: Rol del usuario
 *               createdAt:
 *                 type: string
 *                 format: date
 *                 description: Fecha de creación del usuario
 *               updatedAt:
 *                 type: string
 *                 format: date
 *                 description: Fecha de actualización del usuario
 *     responses:
 *       200:
 *         description: usuario actualizado exitosamente
 *       404:
 *         description: usuario no encontrado
 */
router.put('/:id', usersController.updateUser);        // Actualizar un usuario

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Elimina una usuario
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la usuario a eliminar
 *     responses:
 *       200:
 *         description: usuario eliminado exitosamente
 *       404:
 *         description: usuario no encontrado
 */
router.delete('/:id', usersController.deleteUser);     // Eliminar un usuario

module.exports = router;