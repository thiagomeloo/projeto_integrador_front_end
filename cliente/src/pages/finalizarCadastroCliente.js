import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,

} from 'react-native'

import { TextInputMask } from 'react-native-masked-text'


//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleCadastro from '../styles/styleCadastro'
//COMPONENTS
import DropDownPicker from 'react-native-dropdown-picker'
//MODEL
import ClienteModel from '../model/clienteModel'
//SERVICE
import clienteService from '../services/clienteService'

export default function inicialScreen({ route, navigation }) {
  const user = route.params.user
  const [nomeCompleto, setNomeCompleto] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [valorSexo, setValorSexo] = useState('selecione')
  const [valorRegiao, setValorRegiao] = useState('selecione') //constante para o piker de região

  async function finalizar() {
    let cliente = new ClienteModel(nomeCompleto,
      email, cpf, telefone, valorSexo,
      valorRegiao)

     await clienteService.create(cliente)
      .then(result => {
       // console.log(result)
        cliente.cliente_codigo = result.data.cliente_codigo
      })
      //console.log(cliente)
    navigation.navigate('main', cliente)

  }

  return (
    <View style={styleGlobal.container}>
      <Image
        style={styleCadastro.icon}
        source={require('../../assets/icon.png')}
      />
      <Text style={[styleCadastro.txtIcon, { bottom: 20 }]}>FINALIZAR CADASTRO</Text>

      <View style={styleCadastro.ViwInput}>
        <Text style={styleCadastro.txt}>NOME COMPLETO:</Text>
        <TextInput style={styleCadastro.imput}
          value={nomeCompleto} onChangeText={TextInput => setNomeCompleto(TextInput)}
        />

        <Text style={styleCadastro.txt}>E-MAIL:</Text>
        <TextInput style={styleCadastro.imput}
          value={email} editable={false}
        />

        <Text style={styleCadastro.txt}>CPF:</Text>
        <TextInputMask
          type={'cpf'}
          style={styleCadastro.imput}
          value={cpf}
          onChangeText={cpf => { setCpf(cpf) }}
        />

        <Text style={styleCadastro.txt}>TELEFONE:</Text>
        <TextInputMask
          type={'cel-phone'}
          value={telefone}
          onChangeText={tel => { setTelefone(tel) }}
          style={styleCadastro.imput}
        />
        <Text style={styleCadastro.txt}>SEXO:</Text>
        <DropDownPicker
          items={[
            { label: 'SELECIONE...', color: 'red', value: 'selecione', hidden: true },
            { label: 'MASCULINO', value: 'masculino' },
            { label: 'FEMENINO', value: 'femenino' },
            { label: 'OUTRO', value: 'outro' }
          ]}
          defaultValue={valorSexo}
          style={styleCadastro.dropdown}
          labelStyle={styleCadastro.dropdown_label}
          containerStyle={styleCadastro.dropdown_Container}
          itemStyle={styleCadastro.dropdown_item}
          dropDownStyle={styleCadastro.dropdown_style}
          onChangeItem={item => setValorSexo(item.value)}
          zIndex={2}
        />


        <Text style={styleCadastro.txt}>REGIÃO:</Text>
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
          defaultValue={valorRegiao}
          style={styleCadastro.dropdown}
          labelStyle={styleCadastro.dropdown_label}
          containerStyle={styleCadastro.dropdown_Container}
          itemStyle={styleCadastro.dropdown_item}
          dropDownStyle={styleCadastro.dropdown_style}
          onChangeItem={item => setValorRegiao(item.value)}
          zIndex={1}
        />

      </View>


      <View zIndex={-1}>
        <TouchableOpacity
          style={styleCadastro.Btn}
          onPress={() => finalizar()}
        >
          <Text style={styleGlobal.button}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

