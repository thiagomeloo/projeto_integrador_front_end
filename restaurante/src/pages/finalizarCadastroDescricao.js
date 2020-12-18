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

export default function inicialScreen({ route, navigation }) {

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
                    style={styleCadastro.textarea}
                />
            </View>

            <View zIndex={1}>
                <TouchableOpacity
                    style={[styleCadastro.Btn, { marginTop: 130 }]}
                    onPress={() => navigation.navigate('main')}
                >
                    <Text style={styleGlobal.button}>FINALIZAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

