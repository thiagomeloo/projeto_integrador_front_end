import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'

//COMPONENTES
import PageName from '../components/PageName'
import ItemListMesas from '../components/ItemListMesas'

export default function PratosScreen({ navigation }) {

  const [listaMesas, setListaMesas] = useState(
    {'mesas':[
      { "id": 1, "reserva_data": "04-12-2020", "reserva_cliente":{"nome":"cliente fulano 1"}, "reserva_mesa":{"id":1}, "reserva_restaurante":{"id":1} },
      { "id": 3, "reserva_data": "04-12-2020", "reserva_cliente":{"nome":"cliente fulano 3"}, "reserva_mesa":{"id":2}, "reserva_restaurante":{"id":2} },
      { "id": 2, "reserva_data": "04-12-2020", "reserva_cliente":{"nome":"cliente fulano 2"}, "reserva_mesa":{"id":3}, "reserva_restaurante":{"id":3} },
      { "id": 4, "reserva_data": "04-12-2020", "reserva_cliente":{"nome":"cliente fulano 2"}, "reserva_mesa":{"id":3}, "reserva_restaurante":{"id":3} },
      { "id": 5, "reserva_data": "04-12-2020", "reserva_cliente":{"nome":"cliente fulano 2"}, "reserva_mesa":{"id":3}, "reserva_restaurante":{"id":3} },

    ]}
  )

  return (
    <View style={[styleGlobal.view,{height:'100%'}]}>

      <PageName
        name='MESAS'
      />
    
      <FlatList
        style={[styleGlobal.list]}
        data={listaMesas.mesas}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <ItemListMesas funcEdit={() => navigation.navigate('editMesas',{item})}/>
        }
      />

        <TouchableOpacity
          style={[styleGlobal.button]}
          onPress={() => navigation.navigate('cadastrarMesas')}
        >
          <Text style={styleGlobal.button}>CADASTRAR MESAS</Text>
        </TouchableOpacity>
      
    </View>
  )
}