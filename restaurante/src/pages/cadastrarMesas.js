import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleCadastro from '../styles/styleCadastro'
import styleCadastrarMesa from '../styles/styleCadastrarMesa'
import colors from '../styles/colors/colors'
//ICON
import { Octicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

//COMPONENTS
import PageName from '../components/PageName'
//MODEL
import MesaModel from '../model/MesaModel'

//SERVICE
import mesaService from '../services/mesaService'

export default function inicialScreen({ route, navigation }) {
    console.log(route, 'cadastro')
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [qtdMesa, setQtdMesa] = useState(0)
    const [qtdPessoa, setQtdPessoa] = useState(0)
    const [emailUser,setEmail] = useState('')
    
    function cadastrar() {
      let mesas = new MesaModel(data, hora,
        qtdMesa, qtdPessoa,emailUser)
        //console.log(mesas,'eba')
        mesaService.create(mesas)
        navigation.navigate('main')
    }
    return (


      <View style={[styleGlobal.container, styleCadastrarMesa.container]}>
        <PageName name='CADASTRAR MESAS' />
        <View style={[styleCadastro.ViwInput]}>
          <Text style={styleCadastro.txt}>DATA:</Text>
          <TextInput style={styleCadastro.imput} 
          value={data} onChangeText={TextInput=>setData(TextInput)}
          />


          <Text style={styleCadastro.txt}>HORA:</Text>
          <TextInput style={[styleCadastro.imput, { marginBottom: 20 }]}
          value={hora} onChangeText={TextInput=>setHora(TextInput)}
          />


          <View>
            <View style={styleCadastrarMesa.box}>
              <Text style={styleCadastrarMesa.txt}>NÚMERO DE MESAS</Text>
              <View style={{ flexDirection: 'row-reverse', alignSelf: 'center' }}>
                <TouchableOpacity zIndex={-1} onPress={() => setQtdMesa(qtdMesa + 1)}>
                  <Octicons name="diff-added" size={35} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styleCadastrarMesa.quant}>{qtdMesa} {<FontAwesome name="inbox" size={30} color={colors.primary} />}</Text>
                <TouchableOpacity zIndex={-1} onPress={() => qtdMesa > 0 ? setQtdMesa(qtdMesa - 1) : false}>
                  <Octicons name="diff-removed" size={35} color={colors.primary} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styleCadastrarMesa.box}>
              <Text style={styleCadastrarMesa.txt}>NÚMERO MÁXIMO DE PESSOAS</Text>
              <Text style={styleCadastrarMesa.descricao}>(COM MAIS DE 4 ANOS)</Text>
              <View style={{ flexDirection: 'row-reverse', alignSelf: 'center' }}>
                <TouchableOpacity zIndex={0} onPress={() => setQtdPessoa(qtdPessoa + 1)}>
                  <Octicons name="diff-added" size={35} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styleCadastrarMesa.quant}>{qtdPessoa} {<FontAwesome name="user" size={30} color={colors.primary} />}</Text>

                <TouchableOpacity zIndex={-1} onPress={() => qtdPessoa > 0 ? setQtdPessoa(qtdPessoa - 1) : false} >
                  <Octicons name="diff-removed" size={35} color={colors.primary} />
                </TouchableOpacity>
              </View>
            </View>

          </View>


          <View zIndex={-1}>
            <TouchableOpacity
              style={[styleCadastro.Btn]}
              onPress={() => cadastrar()}
            >
              <Text style={styleGlobal.button}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
}

