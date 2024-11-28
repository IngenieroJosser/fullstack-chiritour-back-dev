const { Multimedia } = require('../models/multimedia_SQL');

// Controlador de Multimedia
const ControllerMultimediaSQL = {
    // Crear un nuevo multimedia
    createMultimedia: async (req, res) => {
        try {
            const newMultimedia = await Multimedia.create(req.body);
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
            const result = await Multimedia.destroy({ where: { id_multimedia: req.params.id } });
            if (!result) return res.status(404).json({ message: 'Multimedia no encontrado' });
            res.status(200).json({ message: 'Multimedia eliminado' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ControllerMultimediaSQL;
