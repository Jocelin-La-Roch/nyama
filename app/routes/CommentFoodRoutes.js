const express = require('express');
const isAuth = require("../middleware/is-auth");
const CommentFoodController = require('../controllers/CommentFoodController');

const router = express.Router();

router.post('/add-comment-food', isAuth, CommentFoodController.addCommentFood);
router.post('/delete-comment-food', isAuth, CommentFoodController.deleteCommentFood);
router.get('/comment-food', isAuth, CommentFoodController.getCommentFood);
router.get('/all-comment-food-by-food', isAuth, CommentFoodController.getAllCommentFoodByFood);
router.get('/all-comment-food-by-user', isAuth, CommentFoodController.getAllCommentFoodByUser);
router.get('/all-comment-food', isAuth, CommentFoodController.getAllCommentFood);

module.exports = router;
