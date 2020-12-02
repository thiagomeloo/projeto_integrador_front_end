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
import styleEditPerfil from '../styles/styleEditPerfil'
import DropDownPicker from 'react-native-dropdown-picker'





export default function inicialScreen({ navigation }) {
    const [valor, setValor] = useState('selecione')
    const [valorRegiao, setValorRegiao] = useState('selecione') //constante para o piker de região
    return (
      <View style={styleGlobal.container}>
        <Image
        style={[styleGlobal.icon2,styleEditPerfil.icon2]}
        source={require('../../assets/icon2.png')}
        />
       <Text style={[styleEditPerfil.txtIcon,styleGlobal.txtIcon]}>EDITAR PERFIL</Text>
       
        
        
        <View style={styleEditPerfil.ViwInput}>
            <Text style={styleEditPerfil.txt}>NOME COMPLETO:</Text>
            <TextInput style={styleEditPerfil.imput}
            />

            <Text style={styleEditPerfil.txt}>E-MAIL:</Text>
            <TextInput style={styleEditPerfil.imput}
            
            />

            <Text style={styleEditPerfil.txt}>CPF:</Text>
            <TextInput style={styleEditPerfil.imput}
            
            />

            <Text style={styleEditPerfil.txt}>TELEFONE:</Text>
            <TextInput style={styleEditPerfil.imput}
            
            />

            <Text style={styleEditPerfil.txt}>SEXO:</Text>
            <DropDownPicker
              items={[
              { label: 'SELECIONE...',color:'red', value: 'selecione', hidden: true },
              { label: 'MASCULINO', value: 'masculino'},
              { label: 'FEMENINO', value: 'femenino'},
              { label: 'OUTRO', value: 'outro'}
              ]}
              defaultValue={valor}
              style={styleEditPerfil.dropdown}
              labelStyle={styleEditPerfil.dropdown_label}
              containerStyle={styleEditPerfil.dropdown_Container}        
              itemStyle={styleEditPerfil.dropdown_item}
              dropDownStyle={styleEditPerfil.dropdown_style}
              onChangeItem={item => setValor(item.value)}
              zIndex={2}
              />

            <Text style={styleEditPerfil.txt}>REGIÃO:</Text>
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
            onPress={() => navigation.navigate('main')}
            >
            <Text style={styleGlobal.button}>FINALIZAR</Text>
            </TouchableOpacity> 
          
      </View>
    </View>
    )
}

