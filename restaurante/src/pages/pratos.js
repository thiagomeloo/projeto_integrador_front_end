import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,

} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'


//SERVICE
import pratosService from '../services/pratoService'

//COMPONENTES
import ItemListPratos from '../components/ItemListPratos'
import PageName from '../components/PageName'

export default function PratosScreen({ route, navigation }) {


  const [listaPratos, setListaPratos] = useState([])
  const [listaPratosUpdate, setListaPratosUpdate] = useState(true)

  async function loadDados() {
    console.log('asd')
    if (listaPratosUpdate) {
      await pratosService.all().then((p) => {
        setListaPratos(p.pratos)
      })
    }
  }

  useEffect(() => {
    loadDados()
  }, [listaPratosUpdate])
  return (
    <View style={styleGlobal.view}>

      <PageName
        name='CARDÁPIO'
      />

      <FlatList
        style={styleGlobal.list}
        data={listaPratos}
        keyExtractor={item => item.prato_codigo.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <ItemListPratos
            nome={item.prato_nome}
            descricao={item.prato_descricao}
            categoria={item.prato_categoria}
            quantidade={item.prato_quantidade}
            preco={item.prato_preco}
            funcEdit={() => navigation.navigate('editPratos', item)}
            funcRemove={() => removePrato(item)}
          >
          </ItemListPratos>
        }
      />
      <TouchableOpacity
        style={[styleGlobal.button]}
        onPress={() => navigation.navigate('cadastrarPratos', route.params)}>
        <Text style={styleGlobal.button}>CADASTRAR PRATOS</Text>
      </TouchableOpacity>
    </View>
  )
}