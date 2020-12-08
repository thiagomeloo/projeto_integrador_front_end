import React, {useState}from 'react'
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
import styleItemMesas from '../styles/styleItemMesas'

//COMPONENTS
import ItemMesas from '../components/itemMesas'





export default function inicialScreen({ navigation }) {
    
    
    return (
      <View style={styleGlobal.container}>
        <Image
        style={[styleCadastro.icon2,styleGlobal.icon2,,{bottom:95}]}
        source={require('../../assets/icon2.png')}
        />
       <Text style={[styleGlobal.txtIcon,styleCadastro.txtIcon,{bottom:130}]}>CADASTRO DE MESAS</Text>
        
        <View style={[styleCadastro.ViwInput,{bottom:80}]}>
         <Text style={styleCadastro.txt}>DATA:</Text>
         <TextInput style={styleCadastro.imput}
        />

       
         <Text style={styleCadastro.txt}>HORA:</Text>
         <TextInput style={[styleCadastro.imput,{marginBottom:20}]}
        />

       
          <ItemMesas
          >
          </ItemMesas>
        

        <View zIndex={-1}>
          <TouchableOpacity
          style={[styleCadastro.Btn,{top:200}]}
          onPress={() => navigation.navigate('main')}
          >
          <Text style={styleGlobal.button}>CADASTRAR</Text>
          </TouchableOpacity> 
        </View>
      
      </View>
    </View>
    )
}

