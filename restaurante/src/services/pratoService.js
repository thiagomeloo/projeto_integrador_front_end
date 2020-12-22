import restauranteService from './restauranteService'
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
    async create(PratoModel) {
        const requisicao = require('./requisicaoService')

        if (PratoModel.mesa_codigo == null) {
            restauranteService.findByEmail(PratoModel.prato_user)
                .then((result) => {
                    
                    return requisicao.post('/prato/create/', {
                        'prato_codigo':PratoModel.prato_codigo,
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
    async update(PratoModel) {
        const requisicao = require('./requisicaoService')
        
        return await requisicao.post('/prato/update',
            {
                'prato_codigo': PratoModel.prato_codigo,
                'prato_nome': PratoModel.prato_nome,
                'prato_categoria': PratoModel.prato_categoria,
                'prato_quantidade': PratoModel.prato_quantidade,
                'prato_descricao': PratoModel.prato_descricao,
                'prato_preco': PratoModel.prato_preco,
                'prato_restaurante_codigo': PratoModel.prato_restaurante_codigo
            }
        ).then(function (response) {
            return response.data
        }).catch(function (error) {
            return error
        })
    }

}