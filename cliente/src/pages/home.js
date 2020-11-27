import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'


export default function HomeScreen({ navigation }) {
    return (
      <View style={styleGlobal.container}>

        <Text style={styleGlobal.textExemplo}> 
          Pagina home
        </Text>
        
        <Button title="ir para pagina inicial"
            onPress={() => navigation.navigate('loginCliente')}/>

      </View>
    )
}