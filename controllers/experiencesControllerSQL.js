const { Experiences, sequelize } = require('../models/experiences_SQL');

const ControllerExperienceSQL = {
    // Crear una nueva experiencia
    createExperience: async (req, res) => {
        try {
            const newExperience = await Experiences.create(req.body);
            res.status(201).json(newExperience);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener todas las experiencias
    getAllExperiences: async (req, res) => {
        try {
            const experiences = await Experiences.findAll();
            res.status(200).json(experiences);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener experiencia por id_experiencia
    getExperienceById: async (req, res) => {
        try {
            const { id_experiencia } = req.params;
            const experience = await Experiences.findByPk(id_experiencia);
            if (!experience) return res.status(404).json({ message: 'Experiencia no encontrada' });
            res.status(200).json(experience);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener experiencias por id_ruta
    getExperiencesByRoute: async (req, res) => {
        try {
            const { id_ruta } = req.params;
            const experiences = await Experiences.findAll({
                where: { id_ruta },
            });
            if (!experiences.length) return res.status(404).json({ message: 'No se encontraron experiencias para esta ruta' });
            res.status(200).json(experiences);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar una experiencia
    updateExperience: async (req, res) => {
        try {
            const { id_experiencia } = req.params;
            const updatedExperience = await Experiences.update(req.body, {
                where: { id_experiencia },
            });

            if (updatedExperience[0] === 0) return res.status(404).json({ message: 'Experiencia no encontrada' });
            res.status(200).json({ message: 'Experiencia actualizada' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar una experiencia
    deleteExperience: async (req, res) => {
        try {
            const { id_experiencia } = req.params;
            const deleted = await Experiences.destroy({
                where: { id_experiencia },
            });

            if (!deleted) return res.status(404).json({ message: 'Experiencia no encontrada' });
            res.status(200).json({ message: 'Experiencia eliminada' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener todas las experiencias con sus rutas relacionadas
    getExperiencesWithRoutes: async (req, res) => {
        try {
            const query = `SELECT * FROM experiencia AS ex INNER JOIN ruta as ru on ru.id_ruta = ex.id_ruta;`;
            const [results] = await sequelize.query(query);
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = ControllerExperienceSQL;
