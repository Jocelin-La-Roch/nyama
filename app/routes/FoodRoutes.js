const express = require('express');
const FoodController = require('../controllers/FoodController');

const router = express.Router();

router.post('/add-product', FoodController.addProduct);

module.exports = router;