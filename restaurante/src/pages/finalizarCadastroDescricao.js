import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

//STYLES
import styleGlobal from '../styles/styleGlobal'
import styleCadastro from '../styles/styleCadastro'
import Textarea from 'react-native-textarea'

//SERVICE
import restauranteService from '../services/restauranteService'

export default function inicialScreen({ route, navigation }) {
    
    const [descricao, setDescricao] = useState('')

    function finalizar(){
        route.params.restaurante_descricao = descricao 
        restauranteService.create(route)
        .then(result =>{
            route.params.restaurante_codigo = result.data.restaurante_codigo
        })
        navigation.navigate('main',route.params)
         
          
      }
    return (
        <View style={[styleGlobal.container]}>
            <Image
                style={[styleCadastro.icon, {}]}
                source={require('../../assets/icon.png')}
            />
            <Text style={[styleGlobal.txtIcon, {}]}>FINALIZAR CADASTRO</Text>
            <View style={{ width: 310, paddingTop: 50 }}>
                <Text style={styleCadastro.txt}>DESCRIÇÃO:</Text>
                <Textarea
                    containerStyle={styleCadastro.textareaContainer}
                    style={styleCadastro.textarea} value={descricao}
                     onChangeText={TextInput=>setDescricao(TextInput)}
                />
            </View>

            <View zIndex={1}>
                <TouchableOpacity
                    style={[styleCadastro.Btn, { marginTop: 130 }]}
                    onPress={()=>finalizar()}
                >
                    <Text style={styleGlobal.button}>FINALIZAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

