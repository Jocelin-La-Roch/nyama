const express = require('express');
const isAuth = require("../middleware/is-auth");
const RestaurantController = require('../controllers/RestaurantController');

const router = express.Router();

router.post('/add-restaurant', isAuth, RestaurantController.addRestaurant);
router.post('/edit-restaurant', isAuth, RestaurantController.editRestaurant);
router.post('/archived-restaurant', isAuth, RestaurantController.archiveRestaurant);
router.get('/restaurant', isAuth, RestaurantController.getRestaurant);
router.get('/all-restaurant-by-category', isAuth, RestaurantController.getAllRestaurantByCategory);
router.get('/add-restaurant', isAuth, RestaurantController.getAllRestaurant);

module.exports = router;
