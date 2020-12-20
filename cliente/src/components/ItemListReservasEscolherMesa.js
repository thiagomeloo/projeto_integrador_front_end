import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'


//STYLES 
import style from '../styles/styleItemListReservas'

function ItemListReservasEscolherMesa(props) {

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
                    <TouchableOpacity style={style.btnReservar}>
                        <Text style={style.txtBtnReservar}>RESERVAR</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.qtdMesasDisponiveis}>2 MESAS DISPONIVEIS</Text>
            </View>
        </View>

    )
}

export default ItemListReservasEscolherMesa