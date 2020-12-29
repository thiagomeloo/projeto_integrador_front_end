module.exports = {

    async all() {
        const requisicao = require('./requisicaoService')
        return await requisicao.get('/reserva/all/')
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async findByCliente(cliente_codigo) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/reserva/findByCliente/', {
            "cliente_codigo": cliente_codigo
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error
            })
    },
    async reservaAndPratos(reservaModel) {
        const requisicao = require('./requisicaoService')
        let reservaCadastrada = reservaModel
        console.log(reservaModel)
        requisicao.post('/reserva/create/', {
            "reserva_cliente_codigo": reservaModel.reserva_cliente_codigo,
            "reserva_mesa_codigo": reservaModel.reserva_mesa_codigo,
            "reserva_restaurante_codigo": reservaModel.reserva_restaurante_codigo,
            "reserva_qtd_pessoas": reservaModel.reserva_qtd_pessoas
        }).then((r) => {
            //r.data.reserva_codigo
            for (let i = 0; i < reservaModel.reserva_pratos.length; i++) {
                //AQUI TENTAR CADASTRAR AS RESERVAS PRATOS
                requisicao.post('/reservaHasPratos/create/', {
                    "reserva_has_prato_quant_prato": 1,
                    "reserva_has_prato_reserva_codigo": r.data.reserva_codigo,
                    "reserva_has_prato_prato_codigo": reservaModel.reserva_pratos[i].prato_codigo
                })
                    .then((x) => {
                        requisicao.post('/mesa/update', {

                            "mesa_codigo": reservaModel.reserva_mesa_codigo,
                            "mesa_quant_mesas": (reservaModel.reserva_mesa_quant_mesas - 1)

                        }).then((r)=>{console.log(r)})
                    })
                    .catch((error) => { })
            }
        }).catch((error) => { })
    },



}