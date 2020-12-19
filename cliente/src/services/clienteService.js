module.exports = {

    async all(req, res) {

    },
    async create(clienteModel) {
        const requisicao = require('./requisicaoService')
        console.log(clienteModel,"foi")
        return requisicao.post('/cliente/create/',{
         'cliente_nome': clienteModel.cliente_nome,
         'cliente_email':clienteModel.cliente_email,
         'cliente_cpf':clienteModel.cliente_cpf,
         'cliente_telefone': clienteModel.cliente_telefone,
         'cliente_Sexo':clienteModel.cliente_sexo,
         'cliente_Regiao': clienteModel.cliente_regiao
        })

    },
    async findByEmail(email) {
        const requisicao = require('./requisicaoService')
        return requisicao.post('/cliente/findByEmail/', {
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