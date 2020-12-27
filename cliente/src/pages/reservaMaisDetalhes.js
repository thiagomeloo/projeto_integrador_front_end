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
import reservaHasPratosService from '../services/reservaHasPratosService'
import restauranteService from '../services/restauranteService'
import pratoService from '../services/pratoService'


export default function reservaMaisDetalhes({ route, navigation }) {

    const [listaPratosReserva, setListaPratosReserva] = useState([])
    const [listaPratosReservaUpdate, setListaPratosReservaUpdate] = useState(true)

    const [restaurante, setRestaurante] = useState({})
    const [restauranteUpdate, setRestauranteUpdate] = useState(true)

    const [prato, setPrato] = useState({})
    const [pratoUpdate, setPrtoUpdate] = useState(true)


    const reserva = route.params
    let itensRender = []
    let valorReserva = 0


    async function loadDados() {
        if (restauranteUpdate) {
            await restauranteService.findByCodigo(reserva.reserva_restaurante_codigo).then((r) => {
                setRestaurante(r.restaurante)
            })
                .catch((error) => { })
                .then(() => { setRestauranteUpdate(false) })
        }

        if (listaPratosReservaUpdate) {
            await reservaHasPratosService.findByReserva(reserva.reserva_codigo).then((r) => {
                setListaPratosReserva(r.reservasHasPratos)

            })
                .catch((error) => { })
                .then(() => { setListaPratosReservaUpdate(false) })
        }
    }

    useEffect(() => {
        loadDados()
    }, [listaPratosReservaUpdate])




    return (
        <View style={styleDetalhesReserva.container}>
            <PageName name='MAIS DETALHES' />
            <View style={styleDetalhesReserva.box}>
                <Text style={styleDetalhesReserva.restauranteTitle}>{restaurante.restaurante_fantasia}</Text>
                <View style={styleDetalhesReserva.boxBody}>
                    <Text style={styleDetalhesReserva.txtNumPessoas}>NÚMERO DE PESSOAS</Text>

                    <View style={styleDetalhesReserva.boxNumPessoa}>
                        <Text style={styleDetalhesReserva.txtNumPessoasValue}>{reserva.reserva_qtd_pessoas}</Text>
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
                        <Text>nada</Text>
                    </ScrollView>

                </View>
            </View>

        </View>
    )
}

