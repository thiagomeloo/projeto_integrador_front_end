import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Alert
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import colors from '../styles/colors/colors'


//SERVICE
import pratoService from '../services/pratoService'

//COMPONENTES
import ItemListPratos from '../components/ItemListPratos'
import PageName from '../components/PageName'

export default function PratosScreen({ route, navigation }) {


  const [listaPratos, setListaPratos] = useState([])
  const [listaPratosUpdate, setListaPratosUpdate] = useState(true)

  async function loadDados() {
    
    if (listaPratosUpdate) {
      await pratoService.findByRestaurante(1)
      .then((p) => {
        setListaPratos(p.pratos)
      })
      .catch((error)=>{})
      .then(()=>{setListaPratosUpdate(false)})
    }
  }

  async function removePrato(prato){
    console.log(prato)

    Alert.alert(
      "Ops!",
      "Tem certeza que deseja remover este prato?",
      [
        {
          text: "NÃO",
          onPress: () => {
            return
          },
          style: "cancel"
        },
        { text: "SIM", onPress: () => {
          
          pratoService.delete(prato.prato_codigo)
          Alert.alert(
            "Sucesso!",
            "Prato removido com sucesso!",
            [
              { text: "OK", onPress: () => setListaPratosUpdate(true) }
            ],
            { cancelable: false }
          )

        },style : "destructive"}
      ],
      { cancelable: false }
    )
    //navigation.navigate('pratos', prato)
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
        refreshControl={
          <RefreshControl 
            refreshing={listaPratosUpdate} 
            onRefresh={()=>{setListaPratosUpdate(true)}}
            progressBackgroundColor={colors.primary}
          />
        }
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