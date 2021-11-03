const express = require('express');
const FoodController = require('../controllers/FoodController');

const router = express.Router();

router.post('/add-food', FoodController.addFood);

module.exports = router;