import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleCadastro from '../styles/styleCadastro'
import DropDownPicker from 'react-native-dropdown-picker'
import Textarea from 'react-native-textarea'

import PageName from '../components/PageName'



export default function inicialScreen({ route, navigation }) {
  
  const [nome, setNome] = useState(route.params.nome)
  const [quant, setQuant] = useState(route.params.quantidade+'')
  const [preco, setPreco] = useState(route.params.preco+'')
  const [descricao, setDescricao] = useState(route.params.descricao)
  const [categoria, setCategoria] = useState(route.params.categoria)
  const [codigo, setCodigo] = useState(route.params.resturante_codigo)
  const [email, setEmail] = useState(route.params.restaurante_email)
  console.log(categoria)
  

  return (
    <View style={styleGlobal.container}>
      <Image
        style={[styleCadastro.icon2, styleGlobal.icon2, { right: 95,top:10 }]}
        source={require('../../assets/icon2.png')}
      />
      <Text style={[styleGlobal.txtIcon, styleCadastro.txtIcon,{bottom:25}]}>EDITAR PRATO</Text>

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
            style={[styleCadastro.Btn,{marginBottom:25}]}
            onPress={() => navigation.navigate('main')}
          >
            <Text style={styleGlobal.button}>ATUALIZAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

