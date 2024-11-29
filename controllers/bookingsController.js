const { Bookings } = require('../models/booking_SQL');

const ControllerBookings = {
  // Obtener todas las reservas
  getAllBookings: async (req, res) => {
    try {
      const bookings = await Bookings.findAll();
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las reservas' });
    }
  },

  // Obtener reserva por ID
  getBookingById: async (req, res) => {
    try {
      const { id_reserva } = req.params;
      const booking = await Bookings.findByPk(id_reserva);
      if (booking) {
        res.status(200).json(booking);
      } else {
        res.status(404).json({ error: 'Reserva no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar la reserva' });
    }
  },

  // Buscar reservas por id_ruta
  getBookingsByRoute: async (req, res) => {
    try {
      const { id_ruta } = req.params;
      const bookings = await Bookings.findAll({ where: { id_ruta } });
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar reservas por ruta' });
    }
  },

  // Buscar reservas por id_experiencia
  getBookingsByExperience: async (req, res) => {
    try {
      const { id_experiencia } = req.params;
      const bookings = await Bookings.findAll({ where: { id_experiencia } });
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar reservas por experiencia' });
    }
  },

  // Crear una nueva reserva
  createBooking: async (req, res) => {
    try {
      const booking = await Bookings.create(req.body);
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la reserva' });
    }
  },

  // Actualizar una reserva
  updateBooking: async (req, res) => {
    try {
      const { id_reserva } = req.params;
      const updated = await Bookings.update(req.body, { where: { id_reserva } });
      if (updated[0]) {
        res.status(200).json({ message: 'Reserva actualizada exitosamente' });
      } else {
        res.status(404).json({ error: 'Reserva no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la reserva' });
    }
  },

  // Eliminar una reserva
  deleteBooking: async (req, res) => {
    try {
      const { id_reserva } = req.params;
      const deleted = await Bookings.destroy({ where: { id_reserva } });
      if (deleted) {
        res.status(200).json({ message: 'Reserva eliminada exitosamente' });
      } else {
        res.status(404).json({ error: 'Reserva no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la reserva' });
    }
  },
};

module.exports = ControllerBookings;
