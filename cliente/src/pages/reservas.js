import React,{useState, useEffect} from 'react'
import {
  View,
  FlatList,
  Button
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleReservas from '../styles/styleReservas'

//COMPONENTES
import PageName from '../components/PageName'
import ItemListReserva from '../components/ItemListReservas'

//SERVICES
import reservaService from '../services/reservaService'

//UTIL
import dateFormat from '../util/dateFormat'

export default function ReservasScreen({ navigation }) {
  

  const [listaReservas, setListaReservas] = useState([])
  const [listaReservaUpdate, setListaReservaUpdate] = useState(true)


  async function loadDados(){
   
    if (listaReservaUpdate) {
      await reservaService.all().then((r) => {
        setListaReservas(r.reservas)
      })
    }
  }

  useEffect(() => {
    loadDados()
  }, [listaReservaUpdate])

  
  return (
    <View style={[styleReservas.container]}>

      <PageName name='Minhas Reservas' />
      <FlatList
        style={styleGlobal.list}
        data={listaReservas}
        keyExtractor={item => item.reserva_codigo + ''}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <ItemListReserva
            key={item.reserva_codigo}
            mes={dateFormat.getMont(item.reserva_data)}
            dia={dateFormat.getDayDateNoBrString(item.reserva_data)}
            hora={dateFormat.getHoraMin(item.reserva_data)}
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