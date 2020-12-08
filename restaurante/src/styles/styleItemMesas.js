import { StyleSheet} from 'react-native'
import { add, color } from 'react-native-reanimated'

import colors from './colors/colors'

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        margin:4,
        padding:50,
        width:'100%',
        elevation:5,
        flex:1,
        backgroundColor:colors.backgroundItemList,
        borderRadius:15,
        borderStyle:'solid',
        borderWidth:2,
        borderColor:colors.primary
    },
    pessoa:{
        alignSelf:'center',
        margin:4,
        padding:60,
        paddingBottom:70,
        width:310,
        elevation:5,
        flex:1,
        backgroundColor:colors.backgroundItemList,
        borderRadius:15,
        borderStyle:'solid',
        borderWidth:2,
        borderColor:colors.primary,
        bottom: 160,
        
    },
    txt
    :{
        fontSize: 20,
        color:colors.primary,
        bottom:50,
        fontWeight:'bold',
        textAlign:'center'
    },
    btn
    :{
        bottom:40,
        width:145,
        height:200
        
    },
    quant
    :{
        color:colors.primary,
        fontWeight:'bold',
        fontSize:25,
        marginLeft:5,
        marginRight:5,
    },
    descricao:{
        fontSize:14,
        bottom:55,
        left:20,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:colors.secondary,
    },

})

export default styles