import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  Image
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleRestaurante from '../styles/styleRestaurante'


//COMPONENTES
import ItemListRestaurante from '../components/ItemListRestaurante'
import PageName from '../components/PageName'

//SERVICES
import restauranteService from '../services/restauranteService'

export default function RestauranteScreen({ navigation }) {

  const [listaRestaurante, setListaRestaurante] = useState({})
  const [listaRestauranteUpdate, setListaRestauranteUpdate] = useState(true)



  if (listaRestauranteUpdate) {
    restauranteService.all().then((r) => {
      setListaRestauranteUpdate(false)
      return setListaRestaurante(r.restaurantes)
    })
  }



  function openReservas(restaurante) {
    //console.log(item)
    navigation.navigate('escolherMesa',restaurante)
  }


  return (
    <View style={styleRestaurante.container}>

      <PageName name='RESTAURANTES' />

      <FlatList
        style={[styleGlobal.list]}
        data={listaRestaurante}
        keyExtractor={item => {return item.restaurante_codigo + ''}}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
        <ItemListRestaurante  key={item.restaurante_codigo}
          nome={item.restaurante_nome}
          descricao={item.restaurante_descricao}
          star={3}
          func={()=>{openReservas(item)}}
        />
         
        }
      />


    </View>
  )
}

