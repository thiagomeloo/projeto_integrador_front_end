import React, {useState}from 'react'
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





export default function inicialScreen({ route,navigation }) {
    
    const item = route.params.item
    const [valor, setValor] = useState('selecione') 
    
    return (
      <View style={styleGlobal.container}>
        <Image
        style={[styleCadastro.icon2,styleGlobal.icon2]}
        source={require('../../assets/icon2.png')}
        />
       <Text style={[styleGlobal.txtIcon,styleCadastro.txtIcon]}>EDITAR PRATOS</Text>
        
        <View style={styleCadastro.ViwInput}>
    <Text style={styleCadastro.txt}>NOME:</Text>
            <TextInput style={styleCadastro.imput}
            />

            <Text style={styleCadastro.txt}>CATEGORIA:</Text>
            <DropDownPicker
              items={[
              { label: 'SELECIONE...',color:'red', value: 'selecione', hidden: true },
              { label: 'ENTRADA', value: 'ENTRADA'},
              { label: 'PRINCIPAL', value: 'PRINCIAP'},
              { label: 'SOBREMESA', value: 'SOBREMESA'},
              
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
        <Text style={styleCadastro.txt}>SERVE ATÉ:</Text>
            <TextInput style={styleCadastro.imput}
            
            />

            <Text style={styleCadastro.txt}>DESCRIÇÃO:</Text>
            <Textarea
                containerStyle={styleCadastro.textareaContainer}
                style={styleCadastro.textarea}
                
            />
       
        <View zIndex={1}>
          <TouchableOpacity
          style={styleCadastro.Btn}
          onPress={() => navigation.navigate('main')}
          >
          <Text style={styleGlobal.button}>ATUALIZAR</Text>
          </TouchableOpacity> 
        </View>
      
      </View>
    </View>
    )
}

