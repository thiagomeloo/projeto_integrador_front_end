import { StyleSheet} from 'react-native'
import { add, color } from 'react-native-reanimated'

import colors from './colors/colors'

const styles = StyleSheet.create({
    mesa:{
        alignSelf:'center',
        margin:4,
        //padding:50,
        width:'100%',
        height:"40%",
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
        //padding:60,
        //paddingBottom:70,
        width:310,
        elevation:5,
        flex:1,
        backgroundColor:colors.backgroundItemList,
        borderRadius:15,
        borderStyle:'solid',
        borderWidth:2,
        borderColor:colors.primary,
        //marginTop:50        
    },
    txt
    :{
        fontSize: 20,
        color:colors.primary,
        fontWeight:'bold',
        textAlign:'center',
        
    },
    quant
    :{
        color:colors.primary,
        fontWeight:'bold',
        fontSize:25,
        marginHorizontal:5,
        height:30
    },
    descricao:{
        fontSize:14,
        textAlign:'center',
        fontWeight:'bold',
        textTransform:'uppercase',
        color:colors.secondary,
    },

})

export default styles