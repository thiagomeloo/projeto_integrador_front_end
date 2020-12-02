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
import stylePerfil from '../styles/stylePerfil'
import DropDownPicker from 'react-native-dropdown-picker'
import ItemEdit from '../components/ItemEdit'




export default function inicialScreen({ navigation }) {
    
    const [valorRegiao, setValorRegiao] = useState('selecione') //constante para o piker de região
    return (
      <View style={styleGlobal.container}>
        <Image
        style={[styleGlobal.icon2,stylePerfil.icon2]}
        source={require('../../assets/icon2.png')}
        />
       <Text style={[stylePerfil.txtIcon,styleGlobal.txtIcon]}>PERFIL</Text>
        <ItemEdit/>
        <View style={stylePerfil.ViwInput}>
            <Text style={stylePerfil.txt}>NOME COMPLETO:</Text>
            <TextInput style={stylePerfil.imput}
            />

            <Text style={stylePerfil.txt}>FANTASIA:</Text>
            <TextInput style={stylePerfil.imput}
            />

            <Text style={stylePerfil.txt}>E-MAIL:</Text>
            <TextInput style={stylePerfil.imput}
            
            />

            <Text style={stylePerfil.txt}>CNPJ:</Text>
            <TextInput style={stylePerfil.imput}
            
            />

            <Text style={stylePerfil.txt}>TELEFONE:</Text>
            <TextInput style={stylePerfil.imput}
            
            />

            <Text style={stylePerfil.txt}>REGIÃO:</Text>
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
              style={stylePerfil.dropdown}
              labelStyle={stylePerfil.dropdown_label}
              containerStyle={stylePerfil.dropdown_Container}        
              itemStyle={stylePerfil.dropdown_item}
              dropDownStyle={stylePerfil.dropdown_style}
              onChangeItem={item => setValorRegiao(item.value)}
              zIndex={2}
              />
      
      </View>
    </View>
    )
}

