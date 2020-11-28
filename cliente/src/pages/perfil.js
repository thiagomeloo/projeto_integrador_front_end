import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'


export default function PerfilScreen({ navigation }) {
    return (
      <View style={styleGlobal.container}>

        <Text style={styleGlobal.textExemplo}> 
          Pagina perfil
        </Text>


      </View>
    )
}