const express = require('express');
const isAuth = require("../middleware/is-auth");
const FavoriteFood = require('../controllers/FavoriteFoodController');

const router = express.Router();

router.post('/add-favorite-food', isAuth, FavoriteFood.addFavoriteFood);
router.post('/delete-favorite-food', isAuth, FavoriteFood.deleteFavoriteFood);
router.get('/all-favorite-food-by-user', isAuth, FavoriteFood.getAllFavoriteFoodByUser);
router.get('/all-favorite-food-by-food', isAuth, FavoriteFood.getAllFavoriteFoodByFood);
router.get('/all-favorite-food', isAuth, FavoriteFood.getAllFavoriteFood);

module.exports = router;
