const { Locations } = require('../models/location_SQL');

// Controlador de Ubicación
const ControllerLocationSQL = {
    // Crear una nueva ubicación
    createLocation: async (req, res) => {
        try {
            const newLocation = await Locations.create(req.body);
            res.status(201).json(newLocation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener todas las ubicaciones
    getLocations: async (req, res) => {
        try {
            const locations = await Locations.findAll();
            res.status(200).json(locations);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener una ubicación por ID
    getLocationById: async (req, res) => {
        try {
            const location = await Locations.findByPk(req.params.id);
            if (!location) return res.status(404).json({ message: 'Ubicación no encontrada' });
            res.status(200).json(location);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar una ubicación
    updateLocation: async (req, res) => {
        try {
            const updatedLocation = await Locations.update(req.body, {
                where: { id_ubicacion: req.params.id }
            });

            if (updatedLocation[0] === 0) {
                return res.status(404).json({ message: 'Ubicación no encontrada' });
            }

            res.status(200).json({ message: 'Ubicación actualizada' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar una ubicación
    deleteLocation: async (req, res) => {
        try {
            const result = await Locations.destroy({ where: { id_ubicacion: req.params.id } });
            if (!result) return res.status(404).json({ message: 'Ubicación no encontrada' });
            res.status(200).json({ message: 'Ubicación eliminada' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ControllerLocationSQL;
