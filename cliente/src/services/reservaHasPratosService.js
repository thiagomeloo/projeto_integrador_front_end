module.exports = {

    async all() {
        const requisicao = require('./requisicaoService')
        return await requisicao.get('/reservaHasPratos/all/')
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async create(reservaHasPratoModel) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/reservaHasPratos/create/',{
            "reserva_has_prato_quant_prato": 1,
            "reserva_has_prato_reserva_codigo": 1,
            "reserva_has_prato_prato_codigo": 1
        })

    },



}