const { Pagos } = require('../models/pagos_SQL');
const axios = require('axios');

// Get all payments
const getPayments = async (req, res) => {
  try {
    const payments = await Pagos.findAll();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving payments', error });
  }
};

// Get payment by ID
const getPaymentById = async (req, res) => {
  try {
    const payment = await Pagos.findByPk(req.params.id);
    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(404).json({ message: 'Payment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving payment', error });
  }
};

// Create a new payment
const createPayment = async (req, res) => {
  try {
    const newPayment = await Pagos.create(req.body);
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment', error });
  }
};

// Update an existing payment
const updatePayment = async (req, res) => {
  try {
    const [updated] = await Pagos.update(req.body, {
      where: { id_pago: req.params.id }
    });
    if (updated) {
      const updatedPayment = await Pagos.findByPk(req.params.id);
      res.status(200).json(updatedPayment);
    } else {
      res.status(404).json({ message: 'Payment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating payment', error });
  }
};

// Delete a payment
const deletePayment = async (req, res) => {
  try {
    const deleted = await Pagos.destroy({
      where: { id_pago: req.params.id }
    });
    if (deleted) {
      res.status(200).json({ message: 'Payment deleted successfully' });
    } else {
      res.status(404).json({ message: 'Payment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting payment', error });
  }
};

// Iniciar el pago
const iniciarPago = async (req, res) => {
  const { monto, moneda, id_reserva, buyerInfo } = req.body;

  const data = {
    merchantId: process.env.PUBLIC_KEY,
    apiKey: process.env.API_KEY,
    amount: monto,
    currency: moneda,
    buyer: buyerInfo,
  };

  try {
    
    const response = await axios.post('https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/', data).catch(err => {
        console.error('Error en la solicitud a PayU:', err.response ? err.response.data : err.message);
        throw new Error('Error en la solicitud a PayU');
    });
    const paymentResponse = response.data;
    
    const nuevoPago = await Pagos.create({
      id_reserva,
      estado: paymentResponse.state,
      monto,
      fecha_pago: new Date(),
      respuesta_payu: JSON.stringify(paymentResponse),
    });

    res.status(201).json(nuevoPago);
  } catch (error) {
    res.status(500).json({ message: 'Error al procesar el pago', error });
  }
};

module.exports = {
  getPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
  iniciarPago, // Agregar la nueva función aquí
};
