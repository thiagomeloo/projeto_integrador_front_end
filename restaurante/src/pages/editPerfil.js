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
import styleEditPerfil from '../styles/styleEditPerfil'
import DropDownPicker from 'react-native-dropdown-picker'





export default function inicialScreen({ route, navigation }) {

  const [nome, setNome] = useState(route.params.restaurante_nome)
  const [fantasia, setFantasia] = useState(route.params.restaurante_fantasia)
  const [email, setEmail] = useState(route.params.restaurante_email)
  const [cnpj, setCnpj] = useState(route.params.restaurante_cnpj)
  const [telefone, setTelefone] = useState(route.params.restaurante_telefone)
  const [regiao, setRegiao] = useState(route.params.restaurante_regiao)

  function atualizar(){
    
    //navigation.navigate('main')
  }

  return (
    <View style={styleGlobal.container}>
      <Image
        style={[styleGlobal.icon2, styleEditPerfil.icon2]}
        source={require('../../assets/icon2.png')}
      />
      <Text style={[styleEditPerfil.txtIcon, styleGlobal.txtIcon]}>EDITAR PERFIL</Text>



      <View style={styleEditPerfil.ViwInput}>
        <Text style={styleEditPerfil.txt}>NOME COMPLETO:</Text>
        <TextInput style={styleEditPerfil.imput}
          value={nome}
          onChangeText={nome => { setTelefone(nome) }}
        />

        <Text style={styleEditPerfil.txt}>FANTASIA:</Text>
        <TextInput style={styleEditPerfil.imput}
          value={fantasia}
          onChangeText={fantasia => { setFantasia(fantasia) }}
        />

        <Text style={styleEditPerfil.txt}>E-MAIL:</Text>
        <TextInput style={styleEditPerfil.imput}
          value={email}
          onChangeText={email => { setEmail(email) }}
        />

        <Text style={styleEditPerfil.txt}>CNPJ:</Text>
        <TextInput style={styleEditPerfil.imput}
          value={cnpj}
          onChangeText={cnpj => { setCnpj(cnpj) }}
        />

        <Text style={styleEditPerfil.txt}>TELEFONE:</Text>
        <TextInput style={styleEditPerfil.imput}
          value={telefone}
          onChangeText={telefone => { setTelefone(telefone) }}
        />

        <Text style={styleEditPerfil.txt}>REGIÃO:</Text>
        <DropDownPicker
          items={[
            { label: 'SELECIONE...', color: 'red', value: 'selecione', hidden: true },
            { label: 'AC', value: 'AC' },
            { label: 'AL', value: 'AL' },
            { label: 'AP', value: 'AP' },
            { label: 'AM', value: 'AM' },
            { label: 'BA', value: 'BA' },
            { label: 'CE', value: 'CE' },
            { label: 'ES', value: 'ES' },
            { label: 'GO', value: 'GO' },
            { label: 'MA', value: 'MA' },
            { label: 'MT', value: 'MT' },
            { label: 'MS', value: 'MS' },
            { label: 'MG', value: 'MG' },
            { label: 'PA', value: 'PA' },
            { label: 'PB', value: 'PB' },
            { label: 'PR', value: 'PR' },
            { label: 'PE', value: 'PE' },
            { label: 'PI', value: 'PI' },
            { label: 'RJ', value: 'RJ' },
            { label: 'RN', value: 'RN' },
            { label: 'RS', value: 'RS' },
            { label: 'RO', value: 'RO' },
            { label: 'RR', value: 'RR' },
            { label: 'SC', value: 'SC' },
            { label: 'SP', value: 'SP' },
            { label: 'SE', value: 'SE' },
            { label: 'TO', value: 'TO' },
            { label: 'DF', value: 'DF' }

          ]}
          defaultValue={regiao}
          style={styleEditPerfil.dropdown}
          labelStyle={styleEditPerfil.dropdown_label}
          containerStyle={styleEditPerfil.dropdown_Container}
          itemStyle={styleEditPerfil.dropdown_item}
          dropDownStyle={styleEditPerfil.dropdown_style}
          onChangeItem={item => setValorRegiao(item.value)}
          zIndex={2}
        />

        <TouchableOpacity
          zIndex={-1}
          style={styleEditPerfil.Btn}
          onPress={() => atualizar()}
        >
          <Text style={styleGlobal.button}>ATUALIZAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

