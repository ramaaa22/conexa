const axios = require('axios').default;

module.exports = {
    getAll: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return response.data;
        } catch (error) {
            
        }
    }
}