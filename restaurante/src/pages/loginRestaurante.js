import React from 'react'
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'


export default function loginScreen({ navigation }) {
  return (
    <View style={styleGlobal.container}>
      <Image
        style={styleGlobal.icon}
        source={require('../../assets/icon.png')}
      />


        <TouchableOpacity
          style={styleGlobal.button}
          onPress={() => navigation.navigate('finalizarCadastroRestaurante')}
        >
          <Text style={styleGlobal.button}>LOGIN COM GOOGLE</Text>
        </TouchableOpacity>


    </View>
  )
}