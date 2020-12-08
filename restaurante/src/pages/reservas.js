import React,{useState} from 'react'
import {
  View,
  FlatList,
} from 'react-native'

//STYLES
import styleReservas from '../styles/styleReservas'
import styleGlobal from '../styles/styleGlobal'


//COMPONENTES
import PageName from '../components/PageName'
import ItemListReserva from '../components/ItemListReservas'

export default function ReservasScreen({ navigation }) {
  
  const [listaReservas, setListaReservas] = useState(
    {'reservas':[
      { "id": 1, "reserva_data": "04-12-2020", "reserva_cliente":{"nome":"cliente fulano 1"}, "reserva_mesa":{"id":1}, "reserva_restaurante":{"id":1} },
      { "id": 3, "reserva_data": "04-12-2020", "reserva_cliente":{"nome":"cliente fulano 3"}, "reserva_mesa":{"id":2}, "reserva_restaurante":{"id":2} },
      { "id": 2, "reserva_data": "04-12-2020", "reserva_cliente":{"nome":"cliente fulano 2"}, "reserva_mesa":{"id":3}, "reserva_restaurante":{"id":3} },
    ]}
  )
  
  return (
    <View style={[styleReservas.container]}>

      <PageName name='Lista de Reservas' />

      <FlatList
        style={styleGlobal.list}
        data={listaReservas.reservas}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <ItemListReserva
            data={item.reserva_data}
            cliente={item.reserva_cliente}
            mesa={item.reserva_mesa}
            restaurante={item.reserva_restaurante}
            funcRemove={() => console.log('remover')}
          >
          </ItemListReserva>
        }
      />

    </View>
  )
}