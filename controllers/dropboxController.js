const { Dropbox } = require('dropbox');
const fs = require('fs');
require('dotenv').config();

const dropbox = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

const DropboxController = {
  // Subir archivo a Dropbox y devolver el enlace público
  uploadFile: async (req) => {
    try {
      // Verificar que se subió un archivo
      if (!req.file) {
        throw new Error('No se subió ningún archivo.');
      }

      const filePath = req.file.path; // Ruta temporal del archivo
      const fileName = req.file.originalname; // Nombre original del archivo
      const fileContents = fs.readFileSync(filePath);

      // Subir archivo a Dropbox
      const dropboxResponse = await dropbox.filesUpload({
        path: `/${fileName}`, // Guardar con el nombre original
        contents: fileContents,
      });

      // Generar enlace público
      const sharedLink = await dropbox.sharingCreateSharedLinkWithSettings({
        path: dropboxResponse.result.path_lower,
      });

      // Eliminar archivo temporal local
      fs.unlinkSync(filePath);

      // Devolver la URL pública del archivo
      return {
        url: sharedLink.result.url.replace('?dl=0', '?raw=1'), // Cambiar para obtener un enlace directo
      };
    } catch (error) {
      throw new Error(`Error al subir archivo a Dropbox: ${error.message}`);
    }
  },
};

module.exports = DropboxController;
