const Reserva = require('./models/reservas.model');

const ControllerReservaMongo = {
    // Crear una nueva reserva
    createReserva: async (req, res) => {
      try {
        const nuevaReserva = new Reserva(req.body);
        await nuevaReserva.save();
        res.status(201).json(nuevaReserva);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Obtener todas las reservas
    getReservas: async (req, res) => {
      try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Obtener una reserva por ID
    getReservaById: async (req, res) => {
      try {
        const reserva = await Reserva.findById(req.params.id);
        if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.status(200).json(reserva);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Actualizar una reserva
    updateReserva: async (req, res) => {
      try {
        const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.status(200).json(reserva);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Eliminar una reserva
    deleteReserva: async (req, res) => {
      try {
        const resultado = await Reserva.findByIdAndDelete(req.params.id);
        if (!resultado) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.status(200).json({ message: 'Reserva eliminada' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
}

module.exports = ControllerReservaMongo; 
