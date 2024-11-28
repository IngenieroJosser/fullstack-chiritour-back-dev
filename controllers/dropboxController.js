const { Dropbox } = require('dropbox');
const fs = require('fs');
require('dotenv').config();

const dropbox = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

const DropboxController = {
  uploadFile: async (req, res) => {
    try {
      // Verificar que se subió un archivo
      if (!req.file) {
        return res.status(400).json({ error: 'No se subió ningún archivo.' });
      }

      const filePath = req.file.path; // Ruta temporal del archivo
      const fileName = req.file.originalname; // Nombre original del archivo
      const fileContents = fs.readFileSync(filePath);

      // Subir archivo a Dropbox
      const dropboxResponse = await dropbox.filesUpload({
        path: `/${fileName}`,
        contents: fileContents,
      });

      // Generar enlace público
      const sharedLink = await dropbox.sharingCreateSharedLinkWithSettings({
        path: dropboxResponse.result.path_lower,
      });

      // Eliminar archivo temporal
      fs.unlinkSync(filePath);

      // Enviar respuesta con la URL pública
      const publicUrl = sharedLink.result.url.replace('?dl=0', '?raw=1');
      res.status(200).json({ url: publicUrl });
    } catch (error) {
      console.error('Error al subir archivo a Dropbox:', error);
      res.status(500).json({ error: 'Error al subir archivo a Dropbox.' });
    }
  },
};

module.exports = DropboxController;
