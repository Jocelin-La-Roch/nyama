const express = require('express');
const isAuth = require("../middleware/is-auth");
const CommentRestaurantController = require('../controllers/CommentRestaurantController');

const router = express.Router();

router.post('/add-comment-restaurant', isAuth, CommentRestaurantController.addCommentRestaurant);
router.post('/delete-comment-restaurant', isAuth, CommentRestaurantController.deleteCommentRestaurant);
router.get('/comment-restaurant', isAuth, CommentRestaurantController.getCommentRestaurant);
router.get('/all-comment-restaurant-by-restaurant', isAuth, CommentRestaurantController.getAllCommentRestaurantByRestaurant);
router.get('/all-comment-restaurant-by-user', isAuth, CommentRestaurantController.getAllCommentRestaurantByUser);
router.get('/all-comment-restaurant', isAuth, CommentRestaurantController.getAllCommentRestaurant);




module.exports = router;
