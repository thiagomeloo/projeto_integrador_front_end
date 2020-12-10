import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
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
    
       
       <View style={[styleGlobal.container,styleCadastrarMesa.container]}>
        <PageName name='EDITAR MESAS'/>
        <View style={[styleCadastro.ViwInput]}>
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
              <Text style={styleGlobal.button}>ATUALIZAR</Text>
            </TouchableOpacity>
          </View>

        </View>
        </View>
  )
}

