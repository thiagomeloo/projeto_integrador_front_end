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
    list:{
        height:'85%',
        marginBottom:15
    },
    nome:{
        fontSize:18,
        fontWeight:'bold',
        textTransform:'uppercase',
        marginBottom:15,
        marginTop:-30,
        width:'85%',
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
        justifyContent:'flex-end',
        marginTop:-40
    },
})

export default styles