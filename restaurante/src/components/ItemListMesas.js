import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

import colors from '../styles/colors/colors'

//STYLES 
import style from '../styles/styleItemListMesas'

function ItemListMesas(props) {

    return (
        <View style={style.container}>
            <View style={style.viewData}>
                <Text style={style.data_mes}>Nov</Text>
                <Text style={style.data_nome_dia}>Dia</Text>
                <Text style={style.data_dia}>15</Text>
            </View>
            <View style={style.viewBody}>
                <Text style={style.data_hora}>15:00</Text>
                <Text style={style.txtDisponibilidade}>2 mesas disponiveis</Text>
                <View style={style.viewRodape}>
                    <View style={style.IconPessoa}>
                        <Text style={style.txtIcon}>2</Text>
                        <FontAwesome name="user" size={30} color={colors.fontColorPrimary} />
                    </View>
                    <View style={style.buttonsFunc}>
                        <TouchableOpacity onPress={props.funcEdit}>
                            <MaterialIcons style={style.btnFun} name="edit" size={35} color={colors.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons style={style.btnFun} name="delete" size={35} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default ItemListMesas