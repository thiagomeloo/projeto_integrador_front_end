import React,{useState} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { Octicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

//STYLES 
import style from '../styles/styleItemMesasContainer'
import colors from '../styles/colors/colors'

function ItemMesas(props) {

    const [qtdMesa, setQtdMesa] = useState(0)
    const [qtdPessoa, setQtdPessoa] = useState(0)


    return (

        <View>
            <View style={style.box}>
                <Text style={style.txt}>NÚMERO DE MESAS</Text>
            <View style={{ flexDirection: 'row-reverse', alignSelf: 'center' }}>
                <TouchableOpacity zIndex={-1} onPress={()=> setQtdMesa(qtdMesa+1)}>
                    <Octicons name="diff-added" size={35} color={colors.primary} />
                </TouchableOpacity>
                <Text style={style.quant}>{qtdMesa} {<FontAwesome name="inbox" size={30} color={colors.primary} />}</Text>
                <TouchableOpacity zIndex={-1}  onPress ={()=> qtdMesa > 0  ? setQtdMesa(qtdMesa-1) : false }>
                    <Octicons name="diff-removed" size={35} color={colors.primary} />
                </TouchableOpacity>
            </View>
            </View>
    
            <View style={style.box}>
                <Text style={style.txt}>NÚMERO MÁXIMO DE PESSOAS</Text>
                <Text style={style.descricao}>(COM MAIS DE 4 ANOS)</Text>
                <View style={{ flexDirection: 'row-reverse', alignSelf: 'center' }}>
                    <TouchableOpacity zIndex={0} onPress={()=> setQtdPessoa(qtdPessoa+1)}>
                        <Octicons name="diff-added" size={35} color={colors.primary} />
                    </TouchableOpacity>
                    <Text style={style.quant}>{qtdPessoa} {<FontAwesome name="user" size={30} color={colors.primary} />}</Text>

                    <TouchableOpacity zIndex={-1} onPress={()=> qtdPessoa >0  ? setQtdPessoa(qtdPessoa-1) : false } >
                        <Octicons name="diff-removed" size={35} color={colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>


    )
}

export default ItemMesas