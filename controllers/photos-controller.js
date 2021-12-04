const axios = require('axios').default;
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');
const photosService = require('../services/photos-service');

module.exports = {
    getAll: async (req,res) => {
        try {
            const page = req.query.page || 1 ;
            console.log(page)
            const photos = await photosService.getAll(page);
            res.status(codeStatus.RESPONSE_OK).json({
                photos
            })
        } catch (error) {
            res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR)
        }
    }
}