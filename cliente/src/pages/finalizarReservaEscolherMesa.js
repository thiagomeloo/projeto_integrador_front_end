import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'

//ICONS
import { Octicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'


//STYLES
import styleEscolherMesa from '../styles/styleEscolherMesa'
import styleGlobal from '../styles/styleGlobal'
import colors from '../styles/colors/colors'


//COMPONENTES
import ItemListReservasMesa from '../components/ItemListReservasEscolherMesa'
import PageName from '../components/PageName'

//SERVICES
import mesaService from '../services/mesaService'

export default function RestauranteScreen({ route, navigation }) {

  const [qtdPessoa, setQtdPessoa] = useState(0)

  const params = route.params

  const [listaMesa, setListaMesa] = useState([])
  const [listaMesaUpdate, setListaMesaUpdate] = useState(true)
  


  async function loadDados(){
    console.log('asd')
    if (listaMesaUpdate) {
    
      await mesaService.all().then((r) => {
         
        setListaMesa(r.mesas)
      })
    }
  }

  useEffect(() => {
    loadDados()
  }, [listaMesaUpdate])




  return (
    <View style={styleEscolherMesa.container}>

      <PageName name='ESCOLHER MESA' />


      <View style={styleEscolherMesa.box}>
        <Text style={styleEscolherMesa.txt}>NÚMERO MÁXIMO DE PESSOAS</Text>
        <Text style={styleEscolherMesa.descricao}>(COM MAIS DE 4 ANOS)</Text>
        <View style={{ flexDirection: 'row-reverse', alignSelf: 'center' }}>
          <TouchableOpacity zIndex={0} onPress={() => setQtdPessoa(qtdPessoa + 1)}>
            <Octicons name="diff-added" size={35} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styleEscolherMesa.quant}>{qtdPessoa} {<FontAwesome name="user" size={30} color={colors.primary} />}</Text>

          <TouchableOpacity zIndex={-1} onPress={() => qtdPessoa > 0 ? setQtdPessoa(qtdPessoa - 1) : false} >
            <Octicons name="diff-removed" size={35} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={[styleGlobal.list]}
        data={listaMesa}
        keyExtractor={item => { return item.mesa_codigo + '' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <ItemListReservasMesa
          key={item.mesa_codigo}
          />

        }
      />

    </View>
  )
}

