const express = require('express');
const isAuth = require("../middleware/is-auth");
const FavoriteRestaurant = require('../controllers/FavoriteRestaurantController');

const router = express.Router();

router.post('/add-favorite-restaurant', isAuth, FavoriteRestaurant.addFavoriteRestaurant);
router.post('/get-favorite-restaurant', isAuth, FavoriteRestaurant.deleteFavoriteRestaurant);
router.get('/all-favorite-restaurant-by-user', isAuth, FavoriteRestaurant.getAllFavoriteRestaurantByUser);
router.get('/all-favorite-restaurant-by-restaurant', isAuth, FavoriteRestaurant.getAllFavoriteRestaurantByRestaurant);
router.get('/all-favorite-restaurant', isAuth, FavoriteRestaurant.getAllFavoriteRestaurant);

module.exports = router;
