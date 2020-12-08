import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'


//STYLES 
import style from '../styles/styleItemListReservas'
import colors from '../styles/colors/colors'

function ItemListReservas(props) {

    return (
        <View style={style.container}>
            <View style={style.viewData}>
                <Text style={style.data_mes}>Nov</Text>
                <Text style={style.data_nome_dia}>Dia</Text>
                <Text style={style.data_dia}>15</Text>
            </View>
            <View style={style.viewHora}>
                <View style={style.viewTopo}>
                    <Text style={style.data_hora}>15:00</Text>
                    <TouchableOpacity>
                        <MaterialIcons style={style.iconDelete} name="delete" size={35} color={colors.primary} />
                    </TouchableOpacity>
                </View>
                <Text style={style.nome}>Fulano da silva teste de moreira</Text>
                <View style={style.viewDetalhes}>
                    <View>
                        <Text style={style.txtPratos}>Pratos:</Text>
                        <View style={style.IconPratos}>
                            <Text style={style.txtIcon}>2</Text>
                            <MaterialIcons name="restaurant" size={30} color={colors.fontColorPrimary} />
                        </View>
                    </View>
                    <View>
                        <Text style={style.txtPratos}>Pessoas:</Text>
                        <View style={style.IconPratos}>
                            <Text style={style.txtIcon}>2</Text>
                            <FontAwesome name="user" size={30} color={colors.fontColorPrimary} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={style.txtMostrarMais}>{'Mostrar Mais >>'}</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default ItemListReservas