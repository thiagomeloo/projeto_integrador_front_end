import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleListPratos from '../styles/styleItemListPratos'
import stylePratos from '../styles/stylePageName'



//COMPONENTES
import ItemListPratos from '../components/ItemListPratos'
import PageName from '../components/PageName'

export default function PratosScreen({ navigation }) {


  const [listaPratos, setListaPratos] = useState(
    {
      'pratos': [
        { "id": 1, "nome": "Sorvete de caju com cuscuz", "descricao": "descricao do prato, texto grande para testar a lista de pratos que existem.", 'categoria': 'sobremesa', 'quantidade': 2, "star": 2 },
        { "id": 2, "nome": "Sorvete", "descricao": "descricao do prato", 'categoria': 'sobremesa', 'quantidade': 2, "star": 3 },
        { "id": 3, "nome": "Sorvete", "descricao": "descricao do prato", 'categoria': 'sobremesa', 'quantidade': 2, "star": 4 },
        { "id": 4, "nome": "Sorvete", "descricao": "descricao do prato", 'categoria': 'sobremesa', 'quantidade': 2, "star": 2 },
        { "id": 5, "nome": "Sorvete", "descricao": "descricao do prato", 'categoria': 'sobremesa', 'quantidade': 2, "star": 3 },
        { "id": 6, "nome": "Sorvete", "descricao": "descricao do prato", 'categoria': 'sobremesa', 'quantidade': 2, "star": 4 },
        { "id": 7, "nome": "Sorvete", "descricao": "descricao do prato", 'categoria': 'sobremesa', 'quantidade': 2, "star": 4 }
      ]
    }
  )


  return (
    <View style={styleGlobal.view}>

      <PageName
        name='CARDÁPIO'
      />

    

      <FlatList
        style={styleListPratos.list}
        data={listaPratos.pratos}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <ItemListPratos
            nome={item.nome}
            descricao={item.descricao}
            categoria={item.categoria}
            quantidade={item.quantidade}
            star={item.star}
            funcEdit={() => editPrato(item)}
            funcRemove={() => removePrato(item)}
          >
          </ItemListPratos>
        }
      />

      <View style={styleGlobal.view}>
        <TouchableOpacity
          style={[styleGlobal.button, { top: 40 }]}
          onPress={() => navigation.navigate('cadastrarPratos')}
        >
          <Text style={styleGlobal.button}>CADASTRAR PRATOS</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}