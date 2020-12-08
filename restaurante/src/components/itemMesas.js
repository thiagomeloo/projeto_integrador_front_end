import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

//STYLES 
import style from '../styles/styleItemMesas'
import colors from '../styles/colors/colors'

function ItemMesas(props) {
    
    return (


        <View style={style.container}>
            <Text style={style.txt}>NÚMERO DE MESAS</Text>
            <View style={[{ flexDirection: 'row-reverse' },style.btn]}>
                <TouchableOpacity zIndex={-1} onPress={props.add}>
                    <Octicons name="diff-added" size={35} color={colors.primary} />
                </TouchableOpacity>
                <Text style={style.quant}>0</Text>
                <TouchableOpacity zIndex={-1} >
                    <Octicons name="diff-removed" size={35} color={colors.primary} />
                </TouchableOpacity>
            </View>
            <View style={style.pessoa}>
                <Text style={style.txt}>NÉMERO MÁXIMO DE PESSOAS</Text>
                <Text style={style.descricao}>(COM MAIS DE 4 ANOS)</Text>
                <View style={[{ flexDirection: 'row-reverse' },style.btn]}>
                    <TouchableOpacity zIndex={0} onPress={props.add}>
                        <Octicons name="diff-added" size={35} color={colors.primary} />
                    </TouchableOpacity>
                 <Text style={style.quant}>0 {<FontAwesome name="user" size={35} color={colors.primary} />}</Text>

                    <TouchableOpacity zIndex={-1} >
                        <Octicons name="diff-removed" size={35} color={colors.primary} />
                    </TouchableOpacity>
            </View>
            </View>
            
        </View>
        

    )
}

export default ItemMesas