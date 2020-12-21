import React, {useState, useEffect}from 'react'
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

import restauranteService from '../services/restauranteService'

export default function inicialScreen({route, navigation }) {
    
    const [restaurante,setRestaurante] = useState(route.params)
    const [nome, setNome] = useState(restaurante.restaurante_nome)
    const [fantasia, setFantasia] = useState(restaurante.restaurante_fantasia)
    const [email, setEmail] = useState(restaurante.restaurante_email)
    const [cnpj, setCnpj] = useState(restaurante.restaurante_cnpj)
    const [telefone, setTelefone] = useState(restaurante.restaurante_telefone)
    const [regiao, setRegiao] = useState(restaurante.restaurante_regiao)


    async function updateRestaurante(){
      
    }

    useEffect(() => {
      navigation.addListener('focus', e => {
        
      })

    }, [navigation])

    useEffect(() => {
        setRestaurante(route.params)
    }, [route.params])

    useEffect(() => {
      setNome(restaurante.restaurante_nome)
      setFantasia(restaurante.restaurante_fantasia)
      setEmail(restaurante.restaurante_email)
      setTelefone(restaurante.restaurante_telefone)
      setRegiao(restaurante.restaurante_regiao)
    }, [restaurante])

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

