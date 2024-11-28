const { Multimedia } = require('../models/multimedia_SQL');
const DropboxController = require('./dropboxController');

// Controlador de Multimedia
const ControllerMultimediaSQL = {
    // Crear un nuevo multimedia
    createMultimedia: async (req, res) => {
        try {
            // Verificar que se subió un archivo
            if (!req.file) {
                return res.status(400).json({ error: 'No se subió ningún archivo.' });
            }

            // Subir archivo a Dropbox y obtener la URL
            const dropboxResponse = await DropboxController.uploadFile(req, res);
            const publicUrl = dropboxResponse.url; // Obtener la URL pública de la respuesta

            // Crear un nuevo multimedia en la base de datos
            const newMultimedia = await Multimedia.create({
                related_type: req.body.related_type,
                related_id: req.body.related_id,
                type: req.body.type,
                url: publicUrl, // Almacenar la URL de Dropbox
            });

            res.status(201).json(newMultimedia);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener todos los multimedia
    getMultimedia: async (req, res) => {
        try {
            const multimedia = await Multimedia.findAll();
            res.status(200).json(multimedia);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener un multimedia por ID
    getMultimediaById: async (req, res) => {
        try {
            const multimedia = await Multimedia.findByPk(req.params.id);
            if (!multimedia) return res.status(404).json({ message: 'Multimedia no encontrado' });
            res.status(200).json(multimedia);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener multimedia por `related_id`
    getMultimediaByRelatedId: async (req, res) => {
        try {
            const multimedia = await Multimedia.findAll({
                where: { related_id: req.params.related_id }
            });
            if (!multimedia || multimedia.length === 0) {
                return res.status(404).json({ message: 'Multimedia no encontrado para este related_id' });
            }
            res.status(200).json(multimedia);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar un multimedia
    updateMultimedia: async (req, res) => {
        try {
            const updatedMultimedia = await Multimedia.update(req.body, {
                where: { id_multimedia: req.params.id }
            });

            if (updatedMultimedia[0] === 0) {
                return res.status(404).json({ message: 'Multimedia no encontrado' });
            }

            res.status(200).json({ message: 'Multimedia actualizado' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar un multimedia
    deleteMultimedia: async (req, res) => {
        try {
            // Obtener multimedia por ID para obtener la URL
            const multimedia = await Multimedia.findByPk(req.params.id);
            if (!multimedia) return res.status(404).json({ message: 'Multimedia no encontrado' });
    
            // Eliminar el archivo de Dropbox
            await dropbox.filesDeleteV2({ path: multimedia.url }); // Asegúrate de que `url` contenga la ruta correcta
    
            // Eliminar multimedia de la base de datos
            const result = await Multimedia.destroy({ where: { id_multimedia: req.params.id } });
            if (!result) return res.status(404).json({ message: 'Multimedia no encontrado' });
    
            res.status(200).json({ message: 'Multimedia eliminado' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ControllerMultimediaSQL;
