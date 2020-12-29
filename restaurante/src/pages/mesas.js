import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'

//COMPONENTES
import PageName from '../components/PageName'
import ItemListMesas from '../components/ItemListMesas'
import colors from '../styles/colors/colors'

//SERVICE
import mesaService from '../services/mesaService'
//UTIL
import dateFormat from '../util/dateFormat'


export default function MesaScreen({ route, navigation }) {
  const [listaMesas, setListaMesas] = useState([])
  const [listaMesasUpdate, setListaMesasUpdate] = useState(true)


  async function loadDados() {
    if (listaMesasUpdate) {
      await mesaService.findByRestaurante(route.params.restaurante_codigo)
      .then((m) => {
        setListaMesas(m.mesas)
      })
      .catch((error)=>{})
      .then(()=>{setListaMesasUpdate(false)})
    }
  }

  useEffect(() => {
    loadDados()
  }, [listaMesasUpdate]) 


  return (
    <View style={[styleGlobal.view, { height: '100%' }]}>

      <PageName
        name='MESAS'
      />

      <FlatList
        style={[styleGlobal.list]}
        data={listaMesas}
        keyExtractor={item => item.mesa_codigo.toString()}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl 
            refreshing={listaMesasUpdate} 
            onRefresh={()=>{setListaMesasUpdate(true)}}
            progressBackgroundColor={colors.primary}
          />
        }
        renderItem={({ item }) =>
          <ItemListMesas 
          hora={dateFormat.getHoraMin(item.mesa_data_hora)}
          mes={dateFormat.getMont(item.mesa_data_hora)}
          dia={dateFormat.getDayDateNoBrString(item.mesa_data_hora)}
          mesa={item.mesa_quant_mesas}
          pessoa={item.mesa_quant_pessoas}
          funcEdit={() => navigation.navigate('editMesas',item)} />
        }
      />

      <TouchableOpacity
        style={[styleGlobal.button]}
        onPress={() => navigation.navigate('cadastrarMesas', route.params)}
      >
        <Text style={styleGlobal.button}>CADASTRAR MESAS</Text>
      </TouchableOpacity>

    </View>
  )
}