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
        <View style={styleGlobal.view}>
          <Image
        style={styleGlobal.icon}
        source={require('../../assets/icon.png')}
        />
        </View>
        
        <View style={styleGlobal.view}>
          <TouchableOpacity
          style={styleGlobal.button}
          onPress={() => navigation.navigate('finalizarCadastroCliente')}
          >
          <Text style={styleGlobal.button}>LOGIN COM GOOGLE</Text>
          </TouchableOpacity> 
        </View>
        
        <Text style={styleGlobal.txt}>CADASTRE-SE</Text>
        
      </View>
    )
}