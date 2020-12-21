import restauranteService from './restauranteService'
module.exports = {

    async all(req, res) {

    },
    async create(PratoModel) {
        const requisicao = require('./requisicaoService')

        if (PratoModel.mesa_codigo == null) {
            restauranteService.findByEmail(PratoModel.prato_user)
                .then((result) => {
                    console.log(result)
                    return requisicao.post('/prato/create/', {
                        'prato_nome': PratoModel.prato_nome,
                        'prato_categoria': PratoModel.prato_categoria,
                        'prato_quantidade': PratoModel.prato_quantidade,
                        'prato_descricao': PratoModel.prato_descricao,
                        'prato_preco': PratoModel.prato_preco,
                        'prato_restaurante_codigo': result.restaurante.restaurante_codigo
                    })
                })
        } else {
            return requisicao.post('/prato/create/', {
                'prato_nome': PratoModel.prato_nome,
                'prato_categoria': PratoModel.prato_categoria,
                'prato_quantidade': PratoModel.prato_quantidade,
                'prato_descricao': PratoModel.prato_descricao,
                'prato_preco': PratoModel.prato_preco,
                'prato_restaurante_codigo': result.restaurante.restaurante_codigo
            })
        }


    },
    async findByEmail(email) {

    }

}