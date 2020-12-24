import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'

//STYLES
import styleDetalhesReserva from '../styles/styleDetalhesReserva'
import styleGlobal from '../styles/styleGlobal'

import colors from '../styles/colors/colors'


//COMPONENTES
import PageName from '../components/PageName'
import { FontAwesome } from '@expo/vector-icons'

import reservaModel from '../model/reservaModel'
import reservaService from '../services/reservaService'

//SERVICES

export default function DetalhesReservaScreen({ route, navigation }) {

  const params = route.params
  //sconsole.log(params)

  const mesa = route.params.mesa
  const cliente = route.params.cliente
  const restaurante = route.params.restaurante
  const pratos = route.params.pratos

  const itens = route.params.pratos
  let itensRender = []

  let valorReserva = 0


  for (let i = 0; i < itens.length; i++) {
    valorReserva = valorReserva + itens[i].prato_preco
    itensRender.push(
      <Text key={i} style={styleDetalhesReserva.txtItensReservaItem}>
        {itens[i].prato_nome + ' - '}
        <Text style={styleDetalhesReserva.txtItensReservaItemValor}>
          {itens[i].prato_preco + ' R$'}
        </Text>
      </Text>
    )
  }

  async function finalizarReserva() {
    let reservaModelo = new reservaModel(cliente.cliente_codigo,
      mesa.mesa_codigo,restaurante.restaurante_codigo,
      null,mesa.mesa_quant_pessoas,pratos)
      reservaService.reservaAndPratos(reservaModelo)
      .then(result => {
        console.log('INSERIU')
      })

  }


  return (
    <View style={styleDetalhesReserva.container}>

      <PageName name='DETALHES RESERVA' />
      <View style={styleDetalhesReserva.box}>
        <Text style={styleDetalhesReserva.restauranteTitle}>Restaurante do seu Ze</Text>
        <View style={styleDetalhesReserva.boxBody}>
          <Text style={styleDetalhesReserva.txtNumPessoas}>NÚMERO DE PESSOAS</Text>

          <View style={styleDetalhesReserva.boxNumPessoa}>
            <Text style={styleDetalhesReserva.txtNumPessoasValue}>{mesa.mesa_quant_pessoas}</Text>
            <FontAwesome style={styleDetalhesReserva.icon} name="user" size={30} color={colors.primary} />
          </View>
        </View>
        <View style={styleDetalhesReserva.boxBody}>
          <View style={styleDetalhesReserva.boxValorReserva}>
            <Text style={styleDetalhesReserva.txtValorReserva}>VALOR DA RESERVA</Text>
            <Text style={styleDetalhesReserva.txtValorReservaValue}>{valorReserva + ' R$'}</Text>
          </View>
        </View>
        <View style={[styleDetalhesReserva.boxBody, { flex: 1 }]}>
          <Text style={styleDetalhesReserva.txtItensReservaTitle}>ITENS DA RESERVA</Text>
          <ScrollView style={[{ maxHeight: '80%' }]}>
            {itensRender}
          </ScrollView>

        </View>
      </View>
      <TouchableOpacity
        style={[styleGlobal.button, { marginHorizontal: '20%' }]}
        onPress={() => { finalizarReserva() }}
      >
        <Text style={styleGlobal.button}>FINALIZAR</Text>
      </TouchableOpacity>

    </View>
  )
}

