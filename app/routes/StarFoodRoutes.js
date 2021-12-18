const express = require('express');
const isAuth = require("../middleware/is-auth");
const StarFoodController = require('../controllers/StarFoodController');

const router = express.Router();

router.post('/add-star-food', isAuth, StarFoodController.editStarFood);
router.get('/all-star-food-by-food', isAuth, StarFoodController.getAllStarFoodByFood);
router.get('/all-star-food-by-user', isAuth, StarFoodController.getAllStarFoodByUser);
router.get('/all-star-food', isAuth, StarFoodController.getAllStarFood);

module.exports = router;
