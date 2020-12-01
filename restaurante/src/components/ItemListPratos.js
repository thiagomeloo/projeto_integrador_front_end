import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

//STYLES 
import style from '../styles/styleItemListPratos'
import colors from '../styles/colors/colors'

function ItemListPratos(props) {

    let star = []

    for (let i = 0; i < props.star; i++) {
        star.push(
            <MaterialIcons name="star" size={16} color={colors.primary} />
        )
    }

    return (


        <View style={style.container}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity onPress={props.funDelete}>
                    <MaterialIcons name="delete" size={35} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={props.funEdit}>
                    <MaterialIcons name="edit" size={35} color="black" />
                </TouchableOpacity>

            </View>

            <Text style={style.nome}>{props.nome}</Text>
            <Text
                style={style.descricao}>{props.descricao}
            </Text>
            <Text>Categoria: {props.categoria}</Text>
            <Text>Serve até: {props.quantidade} pessoas</Text>
            <Text>{star}</Text>
            <View style={style.rodape}>
                <MaterialIcons name="room-service" size={50} color="black" />
            </View>
        </View>
    )
}

export default ItemListPratos