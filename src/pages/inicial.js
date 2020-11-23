import React from 'react'
import {
  View,
  Text,
   TouchableOpacity,
  Image
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'


export default function inicialScreen({ navigation }) {
    return (
      <View style={styleGlobal.container}>
        <Image
        style={styleGlobal.icon}
        source={require('../../assets/icon.png')}
        />
        <View >
          <TouchableOpacity
          style={styleGlobal.button}
          onPress={() => navigation.navigate('loginCliente')}
          >
          <Text style={styleGlobal.button}>SOU CLIENTE</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styleGlobal.button}
          onPress={() => navigation.navigate('loginRestaurante')}
          >
          <Text style={styleGlobal.button}>SOU RESTAURANTE</Text>
          </TouchableOpacity> 
        </View>
        
  
      </View>
    )
}

