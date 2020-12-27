import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native'

//STYLES
import styleDetalhesReserva from '../styles/styleDetalhesReserva'
import styleGlobal from '../styles/styleGlobal'

import colors from '../styles/colors/colors'


//COMPONENTES
import PageName from '../components/PageName'
import { FontAwesome } from '@expo/vector-icons'

import reservaModel from '../model/reservaModel'
import reservaService from '../services/reservaService'

//SERVICES

export default function reservaMaisDetalhes({ route, navigation }) {


    return (
        <View style={styleDetalhesReserva.container}>
            <PageName name='MAIS DETALHES' />
            <View style={styleDetalhesReserva.box}>
                <Text style={styleDetalhesReserva.restauranteTitle}>Restaurante do seu Ze</Text>
                <View style={styleDetalhesReserva.boxBody}>
                    <Text style={styleDetalhesReserva.txtNumPessoas}>NÚMERO DE PESSOAS</Text>

                    <View style={styleDetalhesReserva.boxNumPessoa}>
                        <Text style={styleDetalhesReserva.txtNumPessoasValue}>4</Text>
                        <FontAwesome style={styleDetalhesReserva.icon} name="user" size={30} color={colors.primary} />
                    </View>
                </View>
                <View style={styleDetalhesReserva.boxBody}>
                    <View style={styleDetalhesReserva.boxValorReserva}>
                        <Text style={styleDetalhesReserva.txtValorReserva}>VALOR DA RESERVA</Text>
                        <Text style={styleDetalhesReserva.txtValorReservaValue}>4</Text>
                    </View>
                </View>
                <View style={[styleDetalhesReserva.boxBody, { flex: 1 }]}>
                    <Text style={styleDetalhesReserva.txtItensReservaTitle}>PRATOS DA RESERVA</Text>
                    <ScrollView style={[{ maxHeight: '80%' }]}>
                        <Text>ggg</Text>
                        <Text>ggg</Text>
                        <Text>ggg</Text>
                        <Text>ggg</Text>
                        <Text>ggg</Text>
                        <Text>ggg</Text>
                        <Text>ggg</Text>
                        <Text>ggg</Text>
                    </ScrollView>

                </View>
            </View>

        </View>
    )
}

