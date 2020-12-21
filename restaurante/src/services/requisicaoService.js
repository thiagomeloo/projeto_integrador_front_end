const axios = require('axios')

const api = axios.create({
  baseURL: 'https://reserva-mesas.herokuapp.com'
})

module.exports = api