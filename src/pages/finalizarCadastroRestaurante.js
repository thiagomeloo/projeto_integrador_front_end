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
              <Picker.Item label="SELECIONE..." value="selecione" />
              <Picker.Item label="AC" value="AC"  />
              <Picker.Item label="AL" value="AL"  />
              <Picker.Item label="AP" value="AP" />
              <Picker.Item label="AM" value="AM" />
              <Picker.Item label="BA" value="BA" />
              <Picker.Item label="CE" value="CE" />
              <Picker.Item label="ES" value="ES" />
              <Picker.Item label="GO" value="GO" />
              <Picker.Item label="MT" value="MA" />
              <Picker.Item label="MS" value="MT" />
              <Picker.Item label="MS" value="MS" />
              <Picker.Item label="MG" value="MG" />
              <Picker.Item label="PA" value="PA" />
              <Picker.Item label="PB" value="PB" />
              <Picker.Item label="PR" value="PR" />
              <Picker.Item label="PE" value="PE" />
              <Picker.Item label="PI" value="PI" />
              <Picker.Item label="RJ" value="RJ" />
              <Picker.Item label="RN" value="RN" />
              <Picker.Item label="RO" value="RS" />
              <Picker.Item label="RR" value="RR" />
              <Picker.Item label="SC" value="SC" />
              <Picker.Item label="SP" value="SP" />
              <Picker.Item label="SE" value="SE" />
              <Picker.Item label="TO" value="TO" />
              <Picker.Item label="DF" value="DF" />
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

