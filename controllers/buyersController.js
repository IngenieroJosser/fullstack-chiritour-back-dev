const { Buyers } = require('../models/buyer_SQL');

const ControllerBuyers = {
  // Buscar todos los compradores
  getAllBuyers: async (req, res) => {
    try {
      const buyers = await Buyers.findAll(); // Obtiene todos los compradores

      if (buyers.length === 0) {
        return res.status(404).json({ message: 'No se encontraron compradores.' });
      }

      res.status(200).json(buyers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Buscar compradores por id_reserva
  getBuyersByReservation: async (req, res) => {
    try {
      const { id_reserva } = req.params;

      // Buscar compradores relacionados con la reserva
      const buyers = await Buyers.findAll({ where: { id_reserva } });

      if (buyers.length === 0) {
        return res.status(404).json({ message: 'No se encontraron compradores para esta reserva.' });
      }

      res.status(200).json(buyers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Crear un nuevo comprador
  createBuyer: async (req, res) => {
    try {
      const newBuyer = await Buyers.create(req.body);
      res.status(201).json(newBuyer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Eliminar un comprador por id_comprador
  deleteBuyer: async (req, res) => {
    try {
      const { id_comprador } = req.params;

      const result = await Buyers.destroy({ where: { id_comprador } });
      if (!result) {
        return res.status(404).json({ message: 'Comprador no encontrado.' });
      }

      res.status(200).json({ message: 'Comprador eliminado exitosamente.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Actualizar un comprador por id_comprador
  updateBuyer: async (req, res) => {
    try {
      const { id_comprador } = req.params;
      const updatedData = req.body;

      // Buscar el comprador por id_comprador
      const buyer = await Buyers.findByPk(id_comprador);

      if (!buyer) {
        return res.status(404).json({ message: 'Comprador no encontrado.' });
      }

      // Actualizar comprador
      await buyer.update(updatedData);

      res.status(200).json(buyer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = ControllerBuyers;
