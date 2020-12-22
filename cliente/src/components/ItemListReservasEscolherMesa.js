import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'


//STYLES 
import style from '../styles/styleItemListReservas'

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
                    <TouchableOpacity style={style.btnReservar}>
                        <Text style={style.txtBtnReservar}>RESERVAR</Text>
                    </TouchableOpacity>
                </View>
                    <Text style={style.qtdMesasDisponiveis}>{props.quant} MESAS DISPONIVEIS</Text>
            </View>
        </View>

    )
}

export default ItemListReservasEscolherMesa