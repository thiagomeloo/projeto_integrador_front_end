module.exports = {

    async all() {
        const requisicao = require('./requisicaoService')
         return await requisicao.get('/mesa/all/')
            .then(function (response) {
                return response.data                
            })
            .catch(function (error) {
                return error
            })
    },
    async findByRestaurante(restaurante_codigo) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/mesa/findByRestaurante/', {
            "restaurante_codigo": restaurante_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByRestauranteDisponivel(restaurante_codigo) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/mesa/findByRestaurante/disponivel', {
            "restaurante_codigo": restaurante_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByRestauranteDisponivelFilterQtdPessoa(restaurante_codigo, qtd_pessoa) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/mesa/findByRestaurante/disponivel/filter/qtdPessoa', {
            "restaurante_codigo": restaurante_codigo,
            "qtd_pessoa" : qtd_pessoa
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },

}