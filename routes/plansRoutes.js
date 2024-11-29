const express = require('express');
const router = express.Router();
const plansController = require('../controllers/plansController');

// Rutas para los planes
/**
 * @swagger
 * /api/plans/:
 *   get:
 *     summary: Obtiene todos los planes
 *     tags: [Plans]
 *     responses:
 *       200:
 *         description: Lista de planes
 */
router.get('/', plansController.getPlans);

/**
 * @swagger
 * /api/plans/{id}:
 *   get:
 *     summary: Obtiene un plan por ID
 *     tags: [Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del plan
 *     responses:
 *       200:
 *         description: Plan encontrado
 *       404:
 *         description: Plan no encontrado
 */
router.get('/:id', plansController.getPlanById);

/**
 * @swagger
 * /api/plans:
 *   post:
 *     summary: Crea un nuevo plan
 *     tags: [Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_experiencia:
 *                 type: integer
 *               valor:
 *                 type: number
 *               beneficios:
 *                 type: string
 *     responses:
 *       201:
 *         description: Plan creado exitosamente
 */
router.post('/', plansController.createPlan);

/**
 * @swagger
 * /api/plans/{id}:
 *   put:
 *     summary: Actualiza un plan existente
 *     tags: [Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del plan a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_experiencia:
 *                 type: integer
 *               valor:
 *                 type: number
 *               beneficios:
 *                 type: string
 *     responses:
 *       200:
 *         description: Plan actualizado exitosamente
 *       404:
 *         description: Plan no encontrado
 */
router.put('/:id', plansController.updatePlan);

/**
 * @swagger
 * /api/plans/{id}:
 *   delete:
 *     summary: Elimina un plan
 *     tags: [Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del plan a eliminar
 *     responses:
 *       200:
 *         description: Plan eliminado exitosamente
 *       404:
 *         description: Plan no encontrado
 */
router.delete('/:id', plansController.deletePlan);

module.exports = router;
