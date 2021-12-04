var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users-controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hola');
});

router.post('/login', usersController.login)

module.exports = router;
