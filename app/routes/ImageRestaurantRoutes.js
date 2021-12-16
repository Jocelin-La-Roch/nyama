const express = require('express');
const isAuth = require("../middleware/is-auth");
const ImageRestaurantController = require("../controllers/ImageRestaurantController");

const router = express.Router();

router.post('/add-image-restaurant', isAuth, ImageRestaurantController.addImageRestaurant);
router.post('/delete-image-restaurant', isAuth, ImageRestaurantController.deleteImageRestaurant);
router.get('/all-image-restaurant-by-restaurant', isAuth, ImageRestaurantController.getAllImageRestaurantByRestaurant);
router.get('/all-image-restaurant', isAuth, ImageRestaurantController.getAllImageRestaurant);

module.exports = router;
