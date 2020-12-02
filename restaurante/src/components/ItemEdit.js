import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

//STYLES 
import stylePerfil from '../styles/stylePerfil'
import colors from '../styles/colors/colors'


function ItemEdit(props) {


    return (


        <View style={stylePerfil.itemEdit}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity onPress={() => navigation.navigate('editPerfil')}>
                    <MaterialIcons name="edit" size={35} color={colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemEdit