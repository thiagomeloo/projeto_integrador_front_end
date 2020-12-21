import React, { useState } from 'react'
import restauranteService from './restauranteService'
module.exports = {

    async all(req, res) {

    },
    async create(MesaModel) {
        const requisicao = require('./requisicaoService')
        
        if(MesaModel.mesa_codigo == null){
            restauranteService.findByEmail(MesaModel.mesa_user)
            .then((result)=>{
                console.log(result)
                return requisicao.post('/mesa/create/',{
                    'mesa_data_hora':MesaModel.mesa_data+' '+MesaModel.mesa_hora,
                    'mesa_quant_mesas':MesaModel.mesa_quant_mesas,
                    'mesa_quant_pessoas':MesaModel.mesa_quant_pessoas,
                    'mesa_restaurante_codigo': result.restaurante.restaurante_codigo
                })
            })
        }else{
            return requisicao.post('/mesa/create/',{
                'mesa_data_hora':MesaModel.mesa_data+' '+MesaModel.mesa_hora,
                'mesa_quant_mesas':MesaModel.mesa_quant_mesas,
                'mesa_quant_pessoas':MesaModel.mesa_quant_pessoas,
                'mesa_restaurante_codigo': MesaModel.restaurante_codigo
            })
        }
        
        
    },
    async findByEmail(email) {
   
    }

}