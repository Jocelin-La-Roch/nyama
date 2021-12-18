const express = require('express');
const isAuth = require("../middleware/is-auth");
const ReservationController = require('../controllers/ReservationController');

const router = express.Router();

router.post('/add-reservation', isAuth, ReservationController.addReservation);
router.post('/edit-reservation', isAuth, ReservationController.editReservation);
router.post('/delete-reservation', isAuth, ReservationController.deleteReservation);
router.get('/reservation', isAuth, ReservationController.getReservation);
router.get('/all-reservation-by-restaurant', isAuth, ReservationController.getAllReservationByRestaurant);
router.get('/all-reservation-by-user', isAuth, ReservationController.getAllReservationByUser);
router.get('/ll-reservation', isAuth, ReservationController.getAllReservation);

module.exports = router;
