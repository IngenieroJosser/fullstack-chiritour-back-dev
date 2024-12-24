const express = require('express');
const router = express.Router();
const pagosController = require('../controllers/pagosController');

/**
 * @swagger
 * /api/pagos/:
 *   get:
 *     summary: Obtiene todos los pagos
 *     tags: [Pagos]
 *     responses:
 *       200:
 *         description: Lista de pagos
 */
router.get('/', pagosController.getPayments);

/**
 * @swagger
 * /api/pagos/{id}:
 *   get:
 *     summary: Obtiene un pago por ID
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pago
 *     responses:
 *       200:
 *         description: Pago encontrado
 *       404:
 *         description: Pago no encontrado
 */
router.get('/:id', pagosController.getPaymentById);

/**
 * @swagger
 * /api/pagos:
 *   post:
 *     summary: Crea un nuevo pago
 *     tags: [Pagos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_reserva:
 *                 type: integer
 *               estado:
 *                 type: string
 *               monto:
 *                 type: number
 *               fecha_pago:
 *                 type: string
 *                 format: date-time
 *               respuesta_payu:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pago creado exitosamente
 */
router.post('/', pagosController.createPayment);

/**
 * @swagger
 * /api/pagos/{id}:
 *   put:
 *     summary: Actualiza un pago existente
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pago a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_reserva:
 *                 type: integer
 *               estado:
 *                 type: string
 *               monto:
 *                 type: number
 *               fecha_pago:
 *                 type: string
 *                 format: date-time
 *               respuesta_payu:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pago actualizado exitosamente
 *       404:
 *         description: Pago no encontrado
 */
router.put('/:id', pagosController.updatePayment);

/**
 * @swagger
 * /api/pagos/{id}:
 *   delete:
 *     summary: Elimina un pago
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pago a eliminar
 *     responses:
 *       200:
 *         description: Pago eliminado exitosamente
 *       404:
 *         description: Pago no encontrado
 */
router.delete('/:id', pagosController.deletePayment);

// Nueva ruta para iniciar el pago
/**
 * @swagger
 * /api/pagos/iniciar:
 *   post:
 *     summary: Inicia un nuevo pago
 *     tags: [Pagos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               monto:
 *                 type: number
 *               moneda:
 *                 type: string
 *               id_reserva:
 *                 type: integer
 *               buyerInfo:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 *     responses:
 *       201:
 *         description: Pago iniciado exitosamente
 *       500:
 *         description: Error al procesar el pago
 */
router.post('/iniciar', pagosController.iniciarPago);

module.exports = router;
