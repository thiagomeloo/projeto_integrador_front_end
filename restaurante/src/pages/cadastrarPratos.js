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

import PageName from '../components/PageName'



export default function inicialScreen({ navigation }) {
    
    const [valor, setValor] = useState('selecione') 
    return (
      <View style={styleGlobal.container}>
        <PageName name='CADASTRAR MESA'/>
        
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
            <Text style={styleCadastro.txt}>PREÇO:</Text>
            <TextInput style={styleCadastro.imput}
            
            />

            <Text style={styleCadastro.txt}>DESCRIÇÃO:</Text>
            <Textarea
                containerStyle={styleCadastro.textareaContainer}
                style={styleCadastro.textarea}
                
            />
       
        <View zIndex={1}>
          <TouchableOpacity
          zIndex={1}
          style={[styleCadastro.Btn,{marginBottom:30}]}
          onPress={() => navigation.navigate('main')}
          >
          <Text style={[styleGlobal.button]}>CADASTRAR</Text>
          </TouchableOpacity> 
        </View>
      
      </View>
    </View>
    )
}

