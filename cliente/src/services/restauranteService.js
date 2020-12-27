module.exports = {

    async all() {
        const requisicao = require('./requisicaoService')
         return await requisicao.get('/restaurante/all/')
            .then(function (response) {
                return response.data                
            })
            .catch(function (error) {
                return error
            })
    },
    async findByCodigo(restaurante_codigo) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/restaurante/findByCodigo', {
            "restaurante_codigo": restaurante_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })

        
    },

}