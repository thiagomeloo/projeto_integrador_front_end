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


export default function inicialScreen({ navigation }) {
    
    const [valor, setValor] = useState('selecione')
    const [valorRegiao, setValorRegiao] = useState('selecione') //constante para o piker de região
    return (
      <View style={styleGlobal.container}>
        <Image
        style={styleCadastro.icon}
        source={require('../../assets/icon.png')}
        />
       <Text style={[styleCadastro.txtIcon,{bottom:20}]}>FINALIZAR CADASTRO</Text>
        
        <View style={styleCadastro.ViwInput}>
            <Text style={styleCadastro.txt}>NOME COMPLETO:</Text>
            <TextInput style={styleCadastro.imput}
            />

            <Text style={styleCadastro.txt}>E-MAIL:</Text>
            <TextInput style={styleCadastro.imput}
            
            />

            <Text style={styleCadastro.txt}>CPF:</Text>
            <TextInput style={styleCadastro.imput}
            
            />

            <Text style={styleCadastro.txt}>TELEFONE:</Text>
            <TextInput style={styleCadastro.imput}
            
            />
            <Text style={styleCadastro.txt}>SEXO:</Text>
            <DropDownPicker
              items={[
              { label: 'SELECIONE...',color:'red', value: 'selecione', hidden: true },
              { label: 'MASCULINO', value: 'masculino'},
              { label: 'FEMENINO', value: 'femenino'},
              { label: 'OUTRO', value: 'outro'}
              ]}
              defaultValue={valor}
              style={styleCadastro.dropdown}
              labelStyle={styleCadastro.dropdown_label}
              containerStyle={styleCadastro.dropdown_Container}        
              itemStyle={styleCadastro.dropdown_item}
              dropDownStyle={styleCadastro.dropdown_style}
              onChangeItem={item => setValor(item.value)}
              zIndex={2}
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
              zIndex={1}
              />
            
        </View>
      
       
        <View zIndex={-1}>
          <TouchableOpacity
          style={styleCadastro.Btn}
          onPress={() => navigation.navigate('main')}
          >
          <Text style={styleGlobal.button}>FINALIZAR</Text>
          </TouchableOpacity> 
        </View>
        
  
      </View>
    )
}

