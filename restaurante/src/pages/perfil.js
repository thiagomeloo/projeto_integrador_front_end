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

//COMPONENTES
import PageName from '../components/PageName'


export default function inicialScreen({route, navigation }) {
    
    const restaurante = route.params
    const [nome, setNome] = useState(route.params.restaurante_nome)
    const [fantasia, setFantasia] = useState(route.params.restaurante_fantasia)
    const [email, setEmail] = useState(route.params.restaurante_email)
    const [cnpj, setCnpj] = useState(route.params.restaurante_cnpj)
    const [telefone, setTelefone] = useState(route.params.restaurante_telefone)
    const [regiao, setRegiao] = useState(route.params.restaurante_regiao)


    return (
      <View style={styleGlobal.container}>

        <PageName name='PERFIL'/>

       
         <ItemEdit zIndex={-1} nav={()=> navigation.navigate('editPerfil',route.params)}/> 
      
        
        <View style={stylePerfil.ViwInput}>
            <Text style={stylePerfil.txt}>NOME COMPLETO:</Text>
            <Text style={stylePerfil.imput}>{nome}</Text>

            <Text style={stylePerfil.txt}>FANTASIA:</Text>
            <Text style={stylePerfil.imput}>{fantasia}</Text>

            <Text style={stylePerfil.txt}>E-MAIL:</Text>
            <Text style={stylePerfil.imput}>{email}</Text>

            <Text style={stylePerfil.txt}>CNPJ:</Text>
            <Text style={stylePerfil.imput}>{cnpj}</Text>    

            <Text style={stylePerfil.txt}>TELEFONE:</Text>
            <Text style={stylePerfil.imput}>{telefone}</Text>

            <Text style={stylePerfil.txt}>REGIÃO:</Text>
            <Text style={stylePerfil.imput}>{regiao}</Text>
      </View>
    </View>
    )
}

