const axios = require('axios').default;
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
    getAll: async (req,res) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const {data:posts} = response
            res.status(codeStatus.RESPONSE_OK).json({
                posts
            })
        } catch (error) {
            res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR)
        }
    }
}