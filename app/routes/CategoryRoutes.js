const express = require('express');
const isAuth = require("../middleware/is-auth");
const CategoryController = require('../controllers/CategoryController');

const router = express.Router();

router.post('/add-category', isAuth, CategoryController.addCategory);
router.post('/edit-category', isAuth, CategoryController.editCategory);
router.post('/delete-category', isAuth, CategoryController.deleteCategory);
router.get('/category', isAuth, CategoryController.getCategory);
router.get('/all-categories', isAuth, CategoryController.getAllCategories);

module.exports = router;
