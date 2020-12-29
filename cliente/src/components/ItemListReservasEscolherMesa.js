import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'


//STYLES 
import style from '../styles/styleItemListReservas'
import colors from '../styles/colors/colors'


function ItemListReservasEscolherMesa(props) {

    return (
        <View style={style.container}>
            <View style={style.viewData}>
                <Text style={style.data_mes}>{props.mes}</Text>
                <Text style={style.data_nome_dia}>Dia</Text>
                <Text style={style.data_dia}>{props.dia}</Text>
            </View>
            <View style={style.viewHora}>
                <View style={style.viewTopo}>
                    <Text style={style.data_hora}>{props.hora}</Text>
                    <TouchableOpacity
                        onPress={props.func}
                        style={style.btnReservar}>
                        <Text style={style.txtBtnReservar}>RESERVAR</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.qtdPessoasDisponiveis}>MESAS PARA ATÉ {props.quantPessoa} PESSOAS</Text>

                <Text style={style.qtdMesasDisponiveis}>{props.quantMesa} MESAS DISPONIVEIS</Text>
            </View>
        </View>

    )
}

export default ItemListReservasEscolherMesa