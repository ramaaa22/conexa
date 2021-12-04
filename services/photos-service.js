const axios = require('axios').default;

module.exports = {
    getAll: async (page) => {
        try {
            const limit = 10;
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos'/*, {
                params: {
                    _limit: 10
                }
            }*/);
            const offset = (page - 1) * limit;
            const end = offset+limit;
            const result = []
            for (let i=offset; i<end ; i++) {
                result.push(response.data[i])
            }
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}