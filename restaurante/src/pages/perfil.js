import React, {useState}from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import stylePerfil from '../styles/stylePerfil'
import ItemEdit from '../components/ItemEdit'




export default function inicialScreen({ navigation }) {
    
   
    return (
      <View style={styleGlobal.container}>
        <Image
        style={[styleGlobal.icon2,stylePerfil.icon2]}
        source={require('../../assets/icon2.png')}
        />
       <Text style={[stylePerfil.txtIcon,styleGlobal.txtIcon]}>PERFIL</Text>
       
       
         <ItemEdit/> 
      
        
        <View style={stylePerfil.ViwInput}>
            <Text style={stylePerfil.txt}>NOME COMPLETO:</Text>
            <Text style={stylePerfil.imput}>FULANO DA SILVA ROCHA</Text>

            <Text style={stylePerfil.txt}>FANTASIA:</Text>
            <Text style={stylePerfil.imput}>RESTAURANTE DA CAPIVARA</Text>

            <Text style={stylePerfil.txt}>E-MAIL:</Text>
            <Text style={stylePerfil.imput}>FULANO@RESTAURANTE.COM</Text>

            <Text style={stylePerfil.txt}>CNPJ:</Text>
            <Text style={stylePerfil.imput}> XX.XXX.XXX/0001-XX</Text>    

            <Text style={stylePerfil.txt}>TELEFONE:</Text>
            <Text style={stylePerfil.imput}> (XX) XXXXX-XXXX</Text>

            <Text style={stylePerfil.txt}>REGIÃO:</Text>
            <Text style={stylePerfil.imput}> RN</Text>
      </View>
    </View>
    )
}

