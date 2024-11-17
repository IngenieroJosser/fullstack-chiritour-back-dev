const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  destino: { type: String, required: true },
  fecha_inicio: { type: Date, required: true },
  fecha_fin: { type: Date, required: true },
  numero_personas: { type: Number, required: true },
  tipo_tour: { type: String, required: true },
  transporte: { type: String },
  hospedaje: { type: Boolean },
  alimentacion: { type: Boolean },
  comentarios: { type: String },
  metodo_pago: { type: String, required: true },
}, { timestamps: true });

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;
