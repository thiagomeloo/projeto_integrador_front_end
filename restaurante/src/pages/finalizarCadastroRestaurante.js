import React, {useState}from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Picker
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleCadastro from '../styles/styleCadastro'





export default function inicialScreen({ navigation }) {
    
    const [selectedValue, setSelectedValue] = useState("selecione");
    const [selectedValueRegiao, setSelectedValueRegio] = useState("selecione"); //constante para o piker de região
    return (
      <View style={styleGlobal.container}>
        <Image
        style={styleCadastro.icon}
        source={require('../../assets/icon.png')}
        />
       <Text style={styleCadastro.txtIcon}>FINALIZAR CADASTRO</Text>
        
        <View style={styleCadastro.ViwInput}>
            <Text style={styleCadastro.txt}>NOME COMPLETO:</Text>
            <TextInput style={styleCadastro.imput}
            />

            <Text style={styleCadastro.txt}>FANTASIA:</Text>
            <TextInput style={styleCadastro.imput}
            
            />

            <Text style={styleCadastro.txt}>E-MAIL:</Text>
            <TextInput style={styleCadastro.imput}
            
            />

            <Text style={styleCadastro.txt}>CNPJ:</Text>
            <TextInput style={styleCadastro.imput}
            
            />

            <Text style={styleCadastro.txt}>TELEFONE:</Text>
            <TextInput style={styleCadastro.imput}
            
            />

            <Text style={styleCadastro.txt}>REGIÃO:</Text>
            <View style={styleCadastro.pickerView}>
              <Picker  selectedValue={selectedValueRegiao} 
              onValueChange={(itemValue) => setSelectedValueRegio(itemValue)} style={styleCadastro.picker}>
              <Picker.Item color='#cf4466' label="SELECIONE..." value="selecione" />
              <Picker.Item color='#cf4466' label="AC" value="AC"  />
              <Picker.Item color='#cf4466' label="AL" value="AL"  />
              <Picker.Item color='#cf4466' label="AP" value="AP" />
              <Picker.Item color='#cf4466' label="AM" value="AM" />
              <Picker.Item color='#cf4466' label="BA" value="BA" />
              <Picker.Item color='#cf4466' label="CE" value="CE" />
              <Picker.Item color='#cf4466' label="ES" value="ES" />
              <Picker.Item color='#cf4466' label="GO" value="GO" />
              <Picker.Item color='#cf4466' label="MT" value="MA" />
              <Picker.Item color='#cf4466' label="MS" value="MT" />
              <Picker.Item color='#cf4466' label="MS" value="MS" />
              <Picker.Item color='#cf4466' label="MG" value="MG" />
              <Picker.Item color='#cf4466' label="PA" value="PA" />
              <Picker.Item color='#cf4466' label="PB" value="PB" />
              <Picker.Item color='#cf4466' label="PR" value="PR" />
              <Picker.Item color='#cf4466' label="PE" value="PE" />
              <Picker.Item color='#cf4466' label="PI" value="PI" />
              <Picker.Item color='#cf4466' label="RJ" value="RJ" />
              <Picker.Item color='#cf4466' label="RN" value="RN" />
              <Picker.Item color='#cf4466' label="RO" value="RS" />
              <Picker.Item color='#cf4466' label="RR" value="RR" />
              <Picker.Item color='#cf4466' label="SC" value="SC" />
              <Picker.Item color='#cf4466' label="SP" value="SP" />
              <Picker.Item color='#cf4466' label="SE" value="SE" />
              <Picker.Item color='#cf4466' label="TO" value="TO" />
              <Picker.Item color='#cf4466' label="DF" value="DF" />
              </Picker>
            </View>
        </View>
      
       
        <View >
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

