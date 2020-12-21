
module.exports = {

    async all(req, res) {

    },
    async create(restauranteModel) {
        const requisicao = require('./requisicaoService')
        return await requisicao.post('/restaurante/create',{
         'restaurante_nome': restauranteModel.restaurante_nome,
         'restaurante_email':restauranteModel.restaurante_email,
         'restaurante_cnpj':restauranteModel.restaurante_cnpj,
         'restaurante_telefone': restauranteModel.restaurante_telefone,
         'restaurante_fantasia':restauranteModel.restaurante_fantasia,
         'restaurante_regiao': restauranteModel.restaurante_regiao,
         'restaurante_descricao': restauranteModel.restaurante_descricao
        })
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