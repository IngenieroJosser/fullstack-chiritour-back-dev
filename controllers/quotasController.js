const { Quotas } = require('../models/quotas_SQL');

const ControllerQuotas = {
  // Buscar todos los cupos
  getAllQuotas: async (req, res) => {
    try {
      const quotas = await Quotas.findAll();  // Obtiene todos los cupos
      // if (quotas.length === 0) {
      //   return res.status(404).json({ message: 'No se encontraron cupos.' });
      // }
      res.status(200).json(quotas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Buscar cupos por id_reserva
  getQuotasByReservation: async (req, res) => {
    try {
      const { id_reserva } = req.params;

      // Buscar cupos relacionados con la reserva
      const quotas = await Quotas.findAll({ where: { id_reserva } });

      if (quotas.length === 0) {
        return res.status(404).json({ message: 'No se encontraron cupos para esta reserva.' });
      }

      res.status(200).json(quotas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Crear un nuevo cupo
  createQuota: async (req, res) => {
    try {
      const newQuota = await Quotas.create(req.body);
      res.status(201).json(newQuota);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Eliminar un cupo por id_cupo
  deleteQuota: async (req, res) => {
    try {
      const { id_cupo } = req.params;

      const result = await Quotas.destroy({ where: { id_cupo } });
      if (!result) {
        return res.status(404).json({ message: 'Cupo no encontrado.' });
      }

      res.status(200).json({ message: 'Cupo eliminado exitosamente.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Actualizar un cupo por id_cupo
  updateQuota: async (req, res) => {
    try {
      const { id_cupo } = req.params;
      const updatedData = req.body;

      // Buscar el cupo por id_cupo
      const quota = await Quotas.findByPk(id_cupo);

      if (!quota) {
        return res.status(404).json({ message: 'Cupo no encontrado.' });
      }

      // Actualizar cupo
      await quota.update(updatedData);

      res.status(200).json(quota);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = ControllerQuotas;
