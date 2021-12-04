require('dotenv').config();

module.exports = {
  JWT: {
    secretKey: process.env.JWT_SECRET,
  },
};
