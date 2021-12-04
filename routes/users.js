var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users-controller');

router.post('/login', usersController.login)

module.exports = router;
