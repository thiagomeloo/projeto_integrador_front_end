import React,{useState, useEffect} from 'react'
import {
  View,
  FlatList,
  RefreshControl,
  Button
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleReservas from '../styles/styleReservas'
import colors from '../styles/colors/colors'


//COMPONENTES
import PageName from '../components/PageName'
import ItemListReserva from '../components/ItemListReservas'

//SERVICES
import reservaService from '../services/reservaService'

//UTIL
import dateFormat from '../util/dateFormat'

export default function ReservasScreen({route, navigation }) {
  
 
  const [listaReservas, setListaReservas] = useState([])
  const [listaReservaUpdate, setListaReservaUpdate] = useState(true)

  async function loadDados(){
   
    if (listaReservaUpdate) {
      await reservaService.findByCliente(route.params.cliente_codigo)
      .then((r) => {
        setListaReservas(r.reservas)
      })
      .catch((error) => { })
      .then(() => { setListaReservaUpdate(false) })

    }
  }

  useEffect(() => {
    loadDados()
  }, [listaReservaUpdate])

  //console.log(listaReservas)
  return (
    <View style={[styleReservas.container]}>

      <PageName name='Minhas Reservas' />
      <FlatList
        style={styleGlobal.list}
        data={listaReservas}
        keyExtractor={item => item.reserva_codigo + ''}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={listaReservaUpdate}
            onRefresh={() => { setListaReservaUpdate(true) }}
            progressBackgroundColor={colors.primary}
          />
        }
        renderItem={({ item }) =>
          <ItemListReserva
            key={item.reserva_codigo}
            mes={dateFormat.getMont(item.reserva_data)}
            dia={dateFormat.getDayDateNoBrString(item.reserva_data)}
            hora={dateFormat.getHoraMin(item.reserva_data)}
            data={item.reserva_data}
            cliente={item.reserva_cliente}
            mesa={item.reserva_mesa}
            qtdPessoa={item.reserva_qtd_pessoas}
            nome={item.cliente_nome}
            reserva_codigo={item.reserva_codigo}
            restaurante={item.reserva_restaurante}
            funcRemove={() => console.log('remover')}
            nav={()=> navigation.navigate('reservaMaisDetalhes',item)}
          >
          </ItemListReserva>
        }
      />

    </View>
  )
}