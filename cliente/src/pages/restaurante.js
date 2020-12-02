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
import ItemListRestaurante from '../components/ItemListRestaurante'

export default function RestauranteScreen({ navigation }) {

  const [listaRestaurante, setListaRestaurante] = useState(
    {'restaurantes':[
      { "id": 1, "nome": "Restaurante1", "descricao": "descricao restaurante", "star": 2 },
      { "id": 2, "nome": "Restaurante2", "descricao": "descricao restaurante", "star": 3 },
      { "id": 3, "nome": "Restaurante3", "descricao": "descricao restaurante", "star": 4 },
      { "id": 4, "nome": "Restaurante1", "descricao": "descricao restaurante", "star": 2 },
      { "id": 5, "nome": "Restaurante2", "descricao": "descricao restaurante", "star": 3 },
      { "id": 6, "nome": "Restaurante3", "descricao": "descricao restaurante", "star": 4 },
      { "id": 7, "nome": "Restaurante3", "descricao": "descricao restaurante", "star": 4 }
    ]}
  )

  function openRestaurante(item){
    console.log(item)
  }

  return (
    <View>

        <Image
        style={[styleGlobal.icon2,{left:50}]}
        source={require('../../assets/icon2.png')}
        />
       <Text style={[styleGlobal.txtIcon,{left:100}]}>RESTAURANTES</Text>

      <FlatList
        style={styleGlobal.list}
        data={listaRestaurante.restaurantes}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <ItemListRestaurante
            nome={item.nome}
            descricao={item.descricao}
            star={item.star}
            func= {()=> openRestaurante(item)}
          >
          </ItemListRestaurante>
        }
      />


    </View>
  )
}

