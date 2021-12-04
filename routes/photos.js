var express = require('express');
var router = express.Router();
let photosController = require('../controllers/photos-controller');
const validateJWT = require('../middlewares/validate-jwt');


/* GET users listing. */
router.get('/',validateJWT, photosController.getAll);


module.exports = router;
