const express = require('express');
const isAuth = require("../middleware/is-auth");
const ImageFoodController = require("../controllers/ImageFoodController");

const router = express.Router();

router.post('/add-image-food', isAuth, ImageFoodController.addImageFood);
router.post('/delete-image-food', isAuth, ImageFoodController.deleteImageFood);
router.get('/all-image-food-by-food', isAuth, ImageFoodController.getAllImageFoodByFood);
router.get('/all-image-food', isAuth, ImageFoodController.getAllImageFood);

module.exports = router;
