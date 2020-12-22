import React, { useState,useEffect } from 'react'
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



export default function inicialScreen({ route, navigation }) {

  const [cliente, setCliente] = useState(route.params)
  const [cpf, setCpf] = useState(cliente.cliente_cpf)
  const [email, setEmail] = useState(cliente.cliente_email)
  const [nome, setNome] = useState(cliente.cliente_nome)
  const [sexo, setSexo] = useState(cliente.cliente_sexo)
  const [telefone, setTelefone] = useState(cliente.cliente_telefone)
  const [regiao, setRegiao] = useState(cliente.cliente_regiao)


  useEffect(() => {
    setCliente(route.params)
  }, [route.params])

  useEffect(() => {
    setCpf(cliente.cliente_cpf)
    setNome(cliente.cliente_nome)
    setEmail(cliente.cliente_email)
    setTelefone(cliente.cliente_telefone)
    setRegiao(cliente.cliente_regiao)
    setSexo(cliente.cliente_sexo)

  }, [cliente])


  return (
    <View style={styleGlobal.container}>

      <PageName name='PERFIL' />

      <ItemEdit zIndex={-1} nav={() => navigation.navigate('editPerfil', route.params)} />


      <View style={stylePerfil.ViwInput}>
        <Text style={stylePerfil.txt}>NOME COMPLETO:</Text>
        <Text style={stylePerfil.imput}>{nome}</Text>

        <Text style={stylePerfil.txt}>E-MAIL:</Text>
        <Text style={stylePerfil.imput}>{email}</Text>

        <Text style={stylePerfil.txt}>CPF:</Text>
        <Text style={stylePerfil.imput}> {cpf}</Text>

        <Text style={stylePerfil.txt}>TELEFONE:</Text>
        <Text style={stylePerfil.imput}> {telefone}</Text>

        <Text style={stylePerfil.txt}>SEXO:</Text>
        <Text style={stylePerfil.imput}>{sexo}</Text>

        <Text style={stylePerfil.txt}>REGIÃO:</Text>
        <Text style={stylePerfil.imput}> {regiao}</Text>
      </View>
    </View>
  )
}

