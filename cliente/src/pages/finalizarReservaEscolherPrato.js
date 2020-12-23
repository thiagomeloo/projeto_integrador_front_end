import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'

//STYLES
import styleEscolherMesa from '../styles/styleEscolherMesa'
import styleGlobal from '../styles/styleGlobal'
import styleEditPerfil from '../styles/styleEditPerfil'
import colors from '../styles/colors/colors'


//COMPONENTES
import ItemListPrato from '../components/ItemListPratos'
import PageName from '../components/PageName'
import DropDownPicker from 'react-native-dropdown-picker'


//SERVICES
import pratoService from '../services/pratoService'

export default function EscolherPratoScreen({ route, navigation }) {

  const [qtdPessoa, setQtdPessoa] = useState(0)

  const params = route.params

  const [listaPratos, setListaPratos] = useState([])
  const [listaPratoEscolhido, setListaPratoEscolhido] = useState([])

  const [listaPratoUpdate, setListaPratoUpdate] = useState(true)
  const [filtro, setFiltro] = useState('selecione')



  async function loadDados() {
    if (listaPratoUpdate) {
      await pratoService.findByRestaurante(params.mesa_restaurante_codigo)
      .then((r) => {
        setListaPratos(r.pratos)
      })
      .catch((error)=>{})
      .then(()=>{setListaPratoUpdate(false)})
    }
  }

  useEffect(() => {
    loadDados()
  }, [listaPratoUpdate])

  function addPrato(prato) {
    setListaPratoEscolhido([prato,...listaPratoEscolhido])
    //console.log('ADD', listaPratoEscolhido)
  }
  function removePrato(prato) {
    setListaPratoEscolhido(listaPratoEscolhido.filter(pratos => pratos !== prato))
    //console.log('REMOVE', listaPratoEscolhido) 
  }


  return (
    <View style={styleEscolherMesa.container}>

      <PageName name='ESCOLHER PRATO' />
      <Text style={styleEscolherMesa.txt}>FILTRAR:</Text>
      <DropDownPicker
        items={[
          { label: 'SELECIONE...', color: 'red', value: 'selecione', hidden: true },
          { label: 'ENTRADA', value: 'entrada' },
          { label: 'PRINCIPAL', value: 'principal' },
          { label: 'SOBREMESA', value: 'sobremesa' }
        ]}
        defaultValue={filtro}
        style={[styleEditPerfil.dropdown]}
        labelStyle={styleEditPerfil.dropdown_label}
        containerStyle={[styleEditPerfil.dropdown_Container, { marginHorizontal: 40 }]}
        itemStyle={styleEditPerfil.dropdown_item}
        dropDownStyle={styleEditPerfil.dropdown_style}
        onChangeItem={item => setFiltro(item.value)}
        zIndex={3}
      />

      <FlatList
        style={[styleGlobal.list,{marginBottom:15}]}
        data={listaPratos}
        keyExtractor={item => { return item.prato_codigo + '' }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl 
            refreshing={listaPratoUpdate} 
            onRefresh={()=>{setListaPratoUpdate(true)}}
            progressBackgroundColor={colors.primary}
          />
        }
        renderItem={({ item }) =>
          <ItemListPrato
            nome={item.prato_nome}
            descricao={item.prato_descricao}
            categoria={item.prato_categoria}
            preco={item.prato_preco}
            quantidade={item.prato_quantidade}
            star={4}
            key={item.prato_codigo}
            funcAddThis={() => { addPrato(item) }}
            funcRemoveThis={() => { removePrato(item) }}

          />
        }
      />
          <TouchableOpacity
          style={styleGlobal.button}
          onPress={() => {}}
          >
          <Text style={styleGlobal.button}>FINALIZAR</Text>
          </TouchableOpacity> 
    </View>
  )
}

