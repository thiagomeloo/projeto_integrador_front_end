import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

//STYLES 
import style from '../styles/styleItemListPratos'
import colors from '../styles/colors/colors'

function ItemListPratos(props) {

    let star = []

    for (let i = 0; i < props.star && props.star <=5 ; i++) {
        star.push(
            <MaterialIcons name="star" size={16} color={colors.primary} />
        )
    }

    return (


        <View style={style.container}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity onPress={props.funDelete}>
                    <MaterialIcons name="delete" size={35} color={colors.primary} />
                </TouchableOpacity>

                <TouchableOpacity onPress={props.nav}>
                    <MaterialIcons name="edit" size={35} color={colors.primary} />
                </TouchableOpacity>

            </View>

            <Text style={style.nome}>{props.nome}</Text>
            <Text
                style={style.descricao}>{props.descricao}
            </Text>
            <Text style={style.categoria}>Categoria: {props.categoria}</Text>
            <Text style={style.qtdPessoas}>Serve até: {props.quantidade} pessoa(s)</Text>
            <Text style={style.start}>{star}</Text>
            <View style={style.rodape}>
                <MaterialIcons name="room-service" size={50} color={colors.primary} />
            </View>
        </View>
    )
}

export default ItemListPratos