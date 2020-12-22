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


}