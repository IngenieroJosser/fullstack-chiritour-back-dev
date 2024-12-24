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

    // Obtener todas la reservas con las rutas y ubicaciones
    getReservationsWithRouteAndLocation: async (req, res) => {
      try {
        const reservas = await Reserva.findAll({
          include: [
            {
              model: Routes,
              as: 'ruta',
              include: [
                {
                  model: Locations,
                  as: 'ubicacion',
                  attributes: ['nombre', 'departamento', 'municipio'], // Campos específicos
                },
              ],
              attributes: ['nombre', 'descripcion'], // Campos específicos
            },
          ],
          attributes: ['id', 'destino', 'fecha_inicio', 'fecha_fin', 'numero_personas', 'tipo_tour'], // Campos de `Reserva`
        });
  
        res.status(200).json(reservas);
      } catch (error) {
        console.error('Error al obtener reservas:', error);
        res.status(500).json({ error: error.message });
      }
    },
}

module.exports = ControllerReservaSQL;