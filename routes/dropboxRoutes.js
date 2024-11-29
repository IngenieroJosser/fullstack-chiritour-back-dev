const express = require('express');
const multer = require('multer');
const DropboxController = require('../controllers/dropboxController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Configuración de multer para manejo de archivos

/**
 * @swagger
 * /api/dropbox/upload:
 *   post:
 *     summary: Sube un archivo a Dropbox
 *     tags: [Dropbox]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: El archivo que se desea subir a Dropbox
 *     responses:
 *       200:
 *         description: Archivo subido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                   description: URL pública del archivo subido
 *       400:
 *         description: No se subió ningún archivo
 *       500:
 *         description: Error al subir archivo a Dropbox
 */
router.post('/upload', upload.single('file'), DropboxController.uploadFile);

module.exports = router;
