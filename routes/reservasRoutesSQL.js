const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/ReserveController_SQL');



router.post('/', reservaController.createReserva);


router.get('/', reservaController.getReservas);


router.get('/:id', reservaController.getReservaById);


router.put('/:id', reservaController.updateReserva);

router.delete('/:id', reservaController.deleteReserva);

module.exports = router;
