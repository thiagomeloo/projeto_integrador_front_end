import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'

//COMPONENTES
import PageName from '../components/PageName'

export default function PratosScreen({ navigation }) {

  return (
    <View style={styleGlobal.view}>

      <PageName
        name='MESAS'
      />

    

      <View style={styleGlobal.view}>
        <TouchableOpacity
          style={[styleGlobal.button]}
          onPress={() => navigation.navigate('cadastrarMesas')}
        >
          <Text style={styleGlobal.button}>CADASTRAR MESAS</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}