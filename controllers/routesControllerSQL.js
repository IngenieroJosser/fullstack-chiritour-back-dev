const { Routes } = require('../models/routes_SQL');

// Controlador de Rutas
const ControllerRouteSQL = {
    // Crear una nueva ruta
    createRoute: async (req, res) => {
        try {
            const newRoute = await Routes.create(req.body);
            res.status(201).json(newRoute);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener todas las rutas
    getRoutes: async (req, res) => {
        try {
            const routes = await Routes.findAll();
            res.status(200).json(routes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener rutas por id_ubicacion (filtro)
    getRoutesByLocation: async (req, res) => {
        const { id_ubicacion } = req.params;
        try {
            const routes = await Routes.findAll({
                where: { id_ubicacion }
            });
            if (!routes.length) return res.status(404).json({ message: 'No se encontraron rutas para esta ubicación' });
            res.status(200).json(routes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener una ruta por ID
    getRouteById: async (req, res) => {
        try {
            const route = await Routes.findByPk(req.params.id);
            if (!route) return res.status(404).json({ message: 'Ruta no encontrada' });
            res.status(200).json(route);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar una ruta
    updateRoute: async (req, res) => {
        try {
            const updatedRoute = await Routes.update(req.body, {
                where: { id_ruta: req.params.id }
            });

            if (updatedRoute[0] === 0) {
                return res.status(404).json({ message: 'Ruta no encontrada' });
            }

            res.status(200).json({ message: 'Ruta actualizada' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar una ruta
    deleteRoute: async (req, res) => {
        try {
            const result = await Routes.destroy({ where: { id_ruta: req.params.id } });
            if (!result) return res.status(404).json({ message: 'Ruta no encontrada' });
            res.status(200).json({ message: 'Ruta eliminada' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ControllerRouteSQL;
