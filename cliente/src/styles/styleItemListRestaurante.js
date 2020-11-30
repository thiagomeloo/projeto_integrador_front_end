import { StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated'

import colors from './colors/colors'

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        margin:4,
        padding:10,
        width:'90%',
        flex:1,
        backgroundColor:colors.backgroundItemList,
        borderRadius:15,
        borderStyle:'solid',
        borderWidth:2,
        borderColor:colors.primary
    },
    nome:{
        fontSize:18,
        fontWeight:'bold',
        textTransform:'uppercase',
        marginBottom:4
    },
    descricao:{
        fontSize:16,
        marginBottom:4,
    },
    textStart:{
        flexDirection:'row'
    },
    rodape:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
})

export default styles