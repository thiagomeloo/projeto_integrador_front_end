import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'


export default function loginScreen({ navigation }) {
    return (
      <View style={styleGlobal.container}>
        <Text>pagina login</Text>
        <Button title="ir para pagina home"
            onPress={() => navigation.navigate('main')}/>
      </View>
    )
}