const { sequelize } = require('../models/location_SQL');
const { Reserva } = require('../models/Reserva_SQL');

const ControllerReservaSQL = {
    // Crear una nueva reserva
    createReserva: async (req, res) => {
      try {
        const nuevaReserva = await Reserva.create(req.body);
        res.status(201).json(nuevaReserva);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Obtener todas las reservas
    getReservas: async (req, res) => {
      try {
        const reservas = await Reserva.findAll();
        res.status(200).json(reservas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Obtener una reserva por ID
    getReservaById: async (req, res) => {
      try {
        const reserva = await Reserva.findByPk(req.params.id);
        if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.status(200).json(reserva);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Actualizar una reserva
    updateReserva: async (req, res) => {
      try {
        const resultado = await Reserva.update(req.body, { where: { id: req.params.id } });
        if (resultado[0] === 0) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.status(200).json({ message: 'Reserva actualizada' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Eliminar una reserva
    deleteReserva: async (req, res) => {
      try {
        const resultado = await Reserva.destroy({ where: { id: req.params.id } });
        if (!resultado) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.status(200).json({ message: 'Reserva eliminada' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    // Obtener el destino de las rutas
    getDestinationReserve: async (req, res) => {
      try {
        const query = `SELECT destino FROM reservas`;
        const [resultDestination] = await sequelize.query(query);
        res.status(200).json(resultDestination);
      } catch (err) {
        res.status(500).json({ err: err.message });
      }
    },

    // Obtener las rutas de las reservas
    getRoutesReserve: async (req, res) => {
      try {
        const query = `SELECT nombre FROM ruta`;
        const [resultRoutes] = await sequelize.query(query);
        res.status(200).json(resultRoutes);
      } catch (err) {
        res.status(500).json({ err: err.message });
      }
    },

    // Obtener fecha de las reservas
    getDateReserve: async (req, res) => {
      try {
        const query = `SELECT fecha_inicio FROM reservas`;
        const [resultDate] = await sequelize.query(query);
        res.status(200).json(resultDate);
      } catch (err) {
        res.status(500).json({ err: err.message });
      }
    }
}

module.exports = ControllerReservaSQL;