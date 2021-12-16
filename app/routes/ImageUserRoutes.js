const express = require('express');
const isAuth = require("../middleware/is-auth");
const ImageUserController = require('../controllers/ImageUserController');

const router = express.Router();

router.post('/add-image-user', isAuth, ImageUserController.editImageUser);
router.get('/all-image-user', isAuth, ImageUserController.getAllImageUser);

module.exports = router;
