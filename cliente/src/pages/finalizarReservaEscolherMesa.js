import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  Image
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'

//COMPONENTES
import ItemListReservasMesa from '../components/ItemListReservasEscolherMesa'
import PageName from '../components/PageName'

//SERVICES

export default function RestauranteScreen({route, navigation }) {

  const [listaReservas, setListaReservas] = useState({})
  const [listaReservasUpdate, setListaReservasUpdate] = useState(true)

  const params = route.params


  if (listaReservasUpdate) {
    //consultar reservas
    // reservasService.all().then((r) => {
    //   setListaReservasUpdate(false)
    //   return setListaReservas(r.restaurantes)
    // })
  }


  return (
    <View style={styleGlobal.container}>

      <PageName name='ESCOLHER MESA' />



    </View>
  )
}

