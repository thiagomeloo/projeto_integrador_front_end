import React, {useState}from 'react'
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
import DropDownPicker from 'react-native-dropdown-picker'


import RestauranteModel from '../model/restauranteModel'

export default function inicialScreen({route, navigation }) {
  
    const user = route.params.user
    const [nomeCompleto, setNomeCompleto] = useState(user.name)
    const [fantasia, setFantasia] = useState('')
    const [email, setEmail] = useState(user.email)
    const [cnpj, setCnpj] = useState('')
    const [telefone, setTelefone] = useState('')
    const [valorRegiao, setValorRegiao] = useState('selecione') //constante para o piker de região
    
    function prosseguir(){
      let restaurante = new RestauranteModel(nomeCompleto,
        email,cnpj,telefone,fantasia,
        valorRegiao,'',)
        
        //navigation.navigate('main', { restaurante })
        
    }

    return (
      <View style={styleGlobal.container}>
        <Image
        style={styleCadastro.icon}
        source={require('../../assets/icon.png')}
        />
       <Text style={[styleGlobal.txtIcon,{bottom:10}]}>FINALIZAR CADASTRO</Text>
        
        <View style={styleCadastro.ViwInput}>
            <Text style={styleCadastro.txt}>NOME COMPLETO:</Text>
            <TextInput style={styleCadastro.imput}
              value={nomeCompleto}
            />

            <Text style={styleCadastro.txt}>FANTASIA:</Text>
            <TextInput style={styleCadastro.imput}
              value={fantasia}
            />

            <Text style={styleCadastro.txt}>E-MAIL:</Text>
            <TextInput style={styleCadastro.imput}
              value={email}
              editable={false}
            />

            <Text style={styleCadastro.txt}>CNPJ:</Text>
            <TextInput style={styleCadastro.imput}
              value={cnpj}
            />

            <Text style={styleCadastro.txt}>TELEFONE:</Text>
            <TextInput style={styleCadastro.imput}
              value={telefone}
            />

            <Text style={styleCadastro.txt}>REGIÃO:</Text>
            <DropDownPicker
              items={[
              { label: 'SELECIONE...',color:'red', value: 'selecione', hidden: true },
              { label: 'AC', value: 'AC'},
              { label: 'AL', value: 'AL'},
              { label: 'AP', value: 'AP'},
              { label: 'AM', value: 'AM'},
              { label: 'BA', value: 'BA'},
              { label: 'CE', value: 'CE'},
              { label: 'ES', value: 'ES'},
              { label: 'GO', value: 'GO'},
              { label: 'MA', value: 'MA'},
              { label: 'MT', value: 'MT'},
              { label: 'MS', value: 'MS'},
              { label: 'MG', value: 'MG'},
              { label: 'PA', value: 'PA'},
              { label: 'PB', value: 'PB'},
              { label: 'PR', value: 'PR'},
              { label: 'PE', value: 'PE'},
              { label: 'PI', value: 'PI'},
              { label: 'RJ', value: 'RJ'},
              { label: 'RN', value: 'RN'},
              { label: 'RS', value: 'RS'},
              { label: 'RO', value: 'RO'},
              { label: 'RR', value: 'RR'},
              { label: 'SC', value: 'SC'},
              { label: 'SP', value: 'SP'},
              { label: 'SE', value: 'SE'},
              { label: 'TO', value: 'TO'},
              { label: 'DF', value: 'DF'}
              
              ]}
              defaultValue={valorRegiao}
              style={styleCadastro.dropdown}
              labelStyle={styleCadastro.dropdown_label}
              containerStyle={styleCadastro.dropdown_Container}        
              itemStyle={styleCadastro.dropdown_item}
              dropDownStyle={styleCadastro.dropdown_style}
              onChangeItem={item => setValorRegiao(item.value)}
              zIndex={2}
              />
      
       
        <View zIndex={-1}>
          <TouchableOpacity zIndex={-1}
          style={styleCadastro.Btn}
          onPress={() => prosseguir()}
          >
          <Text style={styleGlobal.button}>PROSSEGUIR</Text>
          </TouchableOpacity> 
        </View>
      
      </View>
    </View>
    )
}

