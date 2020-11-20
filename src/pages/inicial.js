import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'


export default function inicialScreen({ navigation }) {
    return (
      <View style={styleGlobal.container}>
        <Text>pagina inicial</Text>

        <Button title="Login cliente"
            onPress={() => navigation.navigate('loginCliente')}/>
        <Button title="Login restaurante"
            onPress={() => navigation.navigate('loginRestaurante')}/>

      </View>
    )
}