import React,{useState, useEffect} from 'react'
import {
  View,
  FlatList,
  RefreshControl
} from 'react-native'

//STYLES
import styleReservas from '../styles/styleReservas'
import styleGlobal from '../styles/styleGlobal'
import colors from '../styles/colors/colors'



//COMPONENTES
import PageName from '../components/PageName'
import ItemListReserva from '../components/ItemListReservas'

import reservaService from '../services/reservaService'

export default function ReservasScreen({route, navigation }) {
  
  const [listaReserva, setListaReserva] = useState([])
  const [listaReservaUpdate, setListaReservaUpdate] = useState(true)

  async function loadDados() {
    
    if (listaReservaUpdate) {
      await reservaService.findByRestaurante(route.params.restaurante_codigo).then((r) => {
        setListaReserva(r.reservas)
      })
      .catch((error)=>{})
      .then(()=>{setListaReservaUpdate(false)})
    }
  }

  useEffect(() => {
    loadDados()
  }, [listaReservaUpdate])
  
  return (
    <View style={[styleReservas.container]}>

      <PageName name='Lista de Reservas' />

      <FlatList
        style={[styleGlobal.list,styleReservas.list]}
        data={listaReserva}
        keyExtractor={item => item.reserva_codigo.toString()}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl 
            refreshing={listaReservaUpdate} 
            onRefresh={()=>{setListaReservaUpdate(true)}}
            progressBackgroundColor={colors.primary}
          />
        }
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