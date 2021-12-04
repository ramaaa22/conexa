var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users-controller');
const {loginValidate} = require('../middlewares/user-middleware');

router.post('/login', loginValidate ,usersController.login)

module.exports = router;
