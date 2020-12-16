const axios = require('axios')

const api = axios.create({
  baseURL: 'http://localhost:5005'
})

module.exports = api