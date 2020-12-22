import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'

//STYLES
import styleDetalhesReserva from '../styles/styleDetalhesReserva'
import styleGlobal from '../styles/styleGlobal'

import colors from '../styles/colors/colors'


//COMPONENTES
import PageName from '../components/PageName'
import { FontAwesome } from '@expo/vector-icons'


//SERVICES

export default function DetalhesReservaScreen({ route, navigation }) {

  const params = route.params


  return (
    <View style={styleDetalhesReserva.container}>

      <PageName name='DETALHES RESERVA' />
      <View style={styleDetalhesReserva.box}>
        <Text style={styleDetalhesReserva.restauranteTitle}>Restaurante do seu Ze</Text>
        <View style={styleDetalhesReserva.boxBody}>
          <Text style={styleDetalhesReserva.txtNumPessoas}>NÚMERO DE PESSOAS</Text>

          <View style={styleDetalhesReserva.boxNumPessoa}>
            <Text style={styleDetalhesReserva.txtNumPessoasValue}>2</Text>
            <FontAwesome style={styleDetalhesReserva.icon} name="user" size={30} color={colors.primary} />
          </View>
        </View>
        <View style={styleDetalhesReserva.boxBody}>
          <View style={styleDetalhesReserva.boxValorReserva}>
            <Text style={styleDetalhesReserva.txtValorReserva}>VALOR DA RESERVA</Text>
            <Text style={styleDetalhesReserva.txtValorReservaValue}>20 R$</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
          style={[styleGlobal.button, {marginHorizontal:'20%'}]}
          onPress={() => {}}
          >
          <Text style={styleGlobal.button}>FINALIZAR</Text>
          </TouchableOpacity> 

    </View>
  )
}

