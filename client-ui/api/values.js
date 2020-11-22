const axios = require('axios')

module.exports.instance = axios.create({
             baseURL : 'http://localhost:3000',
})
module.exports.token = 'first'