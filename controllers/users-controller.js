const userService = require('../services/users-service');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
    login: async (req, res) => {
        try {
            const user = await userService.login(req, res);
            res.json(user)
        } catch (error) {
            res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
        }
        
    }
}