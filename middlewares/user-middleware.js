const { check } = require('express-validator');
const validateFields = require('../middlewares/validate-fields');

module.exports = {
  loginValidate: [
    check('email', 'email is required').notEmpty(),
    check('email','must be a valid email').isEmail(),
    check('password', 'password is required').notEmpty(),
    validateFields
  ],
};
