module.exports = {

    async all() {
        const requisicao = require('./requisicaoService')
         return await requisicao.get('/prato/all/')
            .then(function (response) {
                return response.data                
            })
            .catch(function (error) {
                return error
            })
    },
    async findByRestaurante(restaurante_codigo) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/prato/findByRestaurante/', {
            "restaurante_codigo": restaurante_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByCodigo(prato_codigo) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/prato/findByCodigo', {
            "prato_codigo": prato_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })

        
    },

}