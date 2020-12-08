import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleCadastro from '../styles/styleCadastro'
import styleCadastrarMesa from '../styles/styleCadastrarMesa'

//COMPONENTS
import ItemMesasContainer from '../components/itemMesasContainer'
import PageName from '../components/PageName'




export default function inicialScreen({ navigation }) {


  return (
    <View style={[styleGlobal.container]}>

      <PageName name='Cadastrar Mesas' style={styleCadastrarMesa.pageName} />

      <View style={[styleCadastro.ViwInput, { bottom: 80 }]}>
        <Text style={styleCadastro.txt}>DATA:</Text>
        <TextInput style={styleCadastro.imput}
        />


        <Text style={styleCadastro.txt}>HORA:</Text>
        <TextInput style={[styleCadastro.imput, { marginBottom: 20 }]}
        />


        <ItemMesasContainer />


        <View zIndex={-1}>
          <TouchableOpacity
            style={[styleCadastro.Btn]}
            onPress={() => navigation.navigate('main')}
          >
            <Text style={styleGlobal.button}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

