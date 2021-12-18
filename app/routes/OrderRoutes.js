const express = require('express');
const isAuth = require("../middleware/is-auth");
const OrderController = require('../controllers/OrderController');

const router = express.Router();

router.post('/add-order', isAuth, OrderController.addOrder);
router.post('/edit-order', isAuth, OrderController.editOrder);
router.post('/delete-order', isAuth, OrderController.deleteOrder);
router.get('/order', isAuth, OrderController.getOrder);
router.get('/all-order-by-restaurant', isAuth, OrderController.getAllOrderByRestaurant);
router.get('/all-order-by-user', isAuth, OrderController.getAllOrderByUser);
router.get('/all-order', isAuth, OrderController.getAllOrder);

module.exports = router;
