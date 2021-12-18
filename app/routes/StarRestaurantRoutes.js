const express = require('express');
const isAuth = require("../middleware/is-auth");
const StarRestaurantController = require("../controllers/StartRestaurantController");

const router = express.Router();

router.post('/add-star-restaurant', isAuth, StarRestaurantController.editStarRestaurant);
router.get('/all-star-restaurant-by-restaurant', isAuth, StarRestaurantController.getAllStarRestaurantByRestaurant);
router.get('/all-star-restaurant-by-user', isAuth, StarRestaurantController.getAllStarRestaurantByUser);
router.get('/all-star-restaurant', isAuth, StarRestaurantController.getAllStarRestaurant);

module.exports = router;
