const { Image } = require('react-native')

module.exports = {

    async all(req, res) {

    },
    async create(req, res) {


    },
    async findByEmail(email) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/restaurante/findByEmail/', {
            "email": email
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })

        
    }

}