const { Plans } = require('../models/plan_SQL');

// Controlador de Planes
const PlansController = {
    // Crear un nuevo plan
    createPlan: async (req, res) => {
        try {
            const newPlan = await Plans.create(req.body);
            res.status(201).json(newPlan);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener todos los planes
    getPlans: async (req, res) => {
        try {
            const plans = await Plans.findAll();
            res.status(200).json(plans);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener un plan por ID
    getPlanById: async (req, res) => {
        try {
            const plan = await Plans.findByPk(req.params.id);
            if (!plan) return res.status(404).json({ message: 'Plan no encontrado' });
            res.status(200).json(plan);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar un plan
    updatePlan: async (req, res) => {
        try {
            const updatedPlan = await Plans.update(req.body, {
                where: { id_plan: req.params.id }
            });

            if (updatedPlan[0] === 0) {
                return res.status(404).json({ message: 'Plan no encontrado' });
            }

            res.status(200).json({ message: 'Plan actualizado' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar un plan
    deletePlan: async (req, res) => {
        try {
            const result = await Plans.destroy({ where: { id_plan: req.params.id } });
            if (!result) return res.status(404).json({ message: 'Plan no encontrado' });
            res.status(200).json({ message: 'Plan eliminado' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = PlansController;
