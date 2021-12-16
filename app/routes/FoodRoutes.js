const express = require('express');
const isAuth = require("../middleware/is-auth");
const FoodController = require('../controllers/FoodController');

const router = express.Router();

router.post('/add-food', isAuth, FoodController.addFood);
router.post('/edit-food', isAuth, FoodController.editFood);
router.post('/delete-food', isAuth, FoodController.deleteFood);
router.get('/food', isAuth, FoodController.getFood);
router.get('/all-food', isAuth, FoodController.getAllFood);
router.get('/add-food-by-restaurant', isAuth, FoodController.getAllFoodByRestaurant);
router.get('/add-food-by-category', isAuth, FoodController.getAllFoodByCategory);

module.exports = router;
