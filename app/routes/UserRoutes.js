const express = require('express');
const UserController = require('../controllers/UserController');
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/edit-profile', isAuth, UserController.editProfile);
router.post('/delete-profile', isAuth, UserController.deleteProfile);
router.get('/user', isAuth, UserController.getUser);
router.get('/all-user', isAuth, UserController.getAllUser);

module.exports = router;
