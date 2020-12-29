import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleCadastro from '../styles/styleCadastro'
import DropDownPicker from 'react-native-dropdown-picker'
import Textarea from 'react-native-textarea'
//COMPONENTS
import PageName from '../components/PageName'
//MODEL
import pratoModel from '../model/pratoModel'
//SERVICE
import pratoService from '../services/pratoService'

export default function inicialScreen({ route, navigation }) {

  const [nome, setNome] = useState('')
  const [quant, setQuant] = useState('')
  const [preco, setPreco] = useState('')
  const [descricao, setDescricao] = useState('')
  const [categoria, setCategoria] = useState('selecione')
  const [codigo, setCodigo] = useState(route.params.resturante_codigo)
  const [email, setEmail] = useState(route.params.restaurante_email)

  function cadastrar() {
    let pratos = new pratoModel(nome, categoria, quant, preco,
      descricao, codigo, email)
    pratoService.create(pratos)
    Alert.alert(
      "Sucesso!",
      "Prato adicionado com sucesso!",
      [
        { text: "OK", onPress: () => navigation.navigate('main') }
      ],
      { cancelable: false }
    )
    

  }
  return (
    <View style={styleGlobal.container}>
      <PageName name='CADASTRAR PRATO' />

      <View style={styleCadastro.ViwInput}>
        <Text style={styleCadastro.txt}>NOME:</Text>
        <TextInput style={styleCadastro.imput} value={nome}
          onChangeText={TextInput => setNome(TextInput)}
        />

        <Text style={styleCadastro.txt}>CATEGORIA:</Text>
        <DropDownPicker
          items={[
            { label: 'SELECIONE...', color: 'red', value: 'selecione', hidden: true },
            { label: 'ENTRADA', value: 'entrada' },
            { label: 'PRINCIPAL', value: 'principal' },
            { label: 'SOBREMESA', value: 'sobremesa' },

          ]}
          defaultValue={categoria}
          style={styleCadastro.dropdown}
          labelStyle={styleCadastro.dropdown_label}
          containerStyle={styleCadastro.dropdown_Container}
          itemStyle={styleCadastro.dropdown_item}
          dropDownStyle={styleCadastro.dropdown_style}
          onChangeItem={item => setCategoria(item.value)}
          zIndex={2}
        />
        <Text style={styleCadastro.txt}>SERVE ATÉ:</Text>
        <TextInput style={styleCadastro.imput} value={quant}
          onChangeText={TextInput => setQuant(TextInput)}
        />
        <Text style={styleCadastro.txt}>PREÇO:</Text>
        <TextInput style={styleCadastro.imput} value={preco}
          onChangeText={TextInput => setPreco(TextInput)}
        />
        <Text style={styleCadastro.txt}>DESCRIÇÃO:</Text>
        <Textarea
          containerStyle={styleCadastro.textareaContainer}
          style={styleCadastro.textarea} value={descricao}
          onChangeText={TextInput => setDescricao(TextInput)}

        />

        <View zIndex={1}>
          <TouchableOpacity
            zIndex={1}
            style={[styleCadastro.Btn, { marginBottom: 30 }]}
            onPress={() => cadastrar()}
          >
            <Text style={[styleGlobal.button]}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

