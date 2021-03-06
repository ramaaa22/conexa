var express = require('express');
var router = express.Router();
let postsController = require('../controllers/posts-controller');
const validateJwt = require('../middlewares/validate-jwt');

router.get('/', validateJwt, postsController.getAll);


module.exports = router;
