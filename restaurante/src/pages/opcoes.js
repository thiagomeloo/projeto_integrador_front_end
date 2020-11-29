import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'


export default function RestauranteScreen({ navigation }) {
    return (
      <View style={styleGlobal.container}>

        <Text style={styleGlobal.textExemplo}> 
          Pagina opções
        </Text>
        <View style={styleGlobal.view}>
          <TouchableOpacity
          style={styleGlobal.button,{top:40}}
          onPress={() => navigation.navigate('cadastrarPratos')}
          >
          <Text style={styleGlobal.button}>CADASTRAR PRATOS</Text>
          </TouchableOpacity> 
        </View>

      </View>
    )
}