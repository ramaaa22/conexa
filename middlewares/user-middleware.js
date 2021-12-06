const { check } = require('express-validator');
const validateFields = require('../middlewares/validate-fields');

module.exports = {
  loginValidate: [
    check('email', 'Email is required').notEmpty(),
    check('email','Must be a valid email').isEmail(),
    check('password', 'Password is required').notEmpty(),
    validateFields
  ],
};
