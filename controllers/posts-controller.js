const axios = require('axios').default;
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');
const postsService = require('../services/posts-service');

module.exports = {
    getAll: async (req,res) => {
        try {
            const posts = await postsService.getAll();
            res.status(codeStatus.RESPONSE_OK).json({
                posts
            })
        } catch (error) {
            res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR)
        }
    }
}