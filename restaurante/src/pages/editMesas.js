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
import styleCadastro from '../styles/styleCadastro'
import styleCadastrarMesa from '../styles/styleCadastrarMesa'
import colors from '../styles/colors/colors'
//COMPONENTS
import PageName from '../components/PageName'

//ICON
import { Octicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'


export default function inicialScreen({ navigation }) {

  const [qtdMesa, setQtdMesa] = useState(0)
  const [qtdPessoa, setQtdPessoa] = useState(0)

  return (
    
       
       <View style={[styleGlobal.container,styleCadastrarMesa.container]}>
        <PageName name='EDITAR MESAS'/>
        <View style={[styleCadastro.ViwInput]}>
          <Text style={styleCadastro.txt}>DATA:</Text>
          <TextInput style={styleCadastro.imput}
          />


          <Text style={styleCadastro.txt}>HORA:</Text>
          <TextInput style={[styleCadastro.imput, { marginBottom: 20 }]}
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
              onPress={() => navigation.navigate('main')}
            >
              <Text style={styleGlobal.button}>ATUALIZAR</Text>
            </TouchableOpacity>
          </View>

        </View>
        </View>
  )
}

