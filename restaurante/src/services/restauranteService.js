
module.exports = {

    async all(req, res) {

    },
    async create(restauranteModel) {
        const requisicao = require('./requisicaoService')
        console.log(restauranteModel,"foi\n")
        return requisicao.post('/restaurante/create/',{
         'restaurante_nome': restauranteModel.params.restaurante_nome,
         'restaurante_email':restauranteModel.params.restaurante_email,
         'restaurante_cnpj':restauranteModel.params.restaurante_cnpj,
         'restaurante_telefone': restauranteModel.params.restaurante_telefone,
         'restaurante_fantasia':restauranteModel.params.restaurante_fantasia,
         'restaurante_regiao': restauranteModel.params.restaurante_regiao,
         'restaurante_descricao': restauranteModel.params.restaurante_descricao
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