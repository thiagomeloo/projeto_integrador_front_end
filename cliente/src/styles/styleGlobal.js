import { StyleSheet} from 'react-native'
import colors from './colors/colors'

const styles = StyleSheet.create({
    container
    :{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.backgroundView,
    },
    view:
    {
        bottom:40

    },
    txt:
    {
        color:colors.primary,
        fontSize:16,
        top:150
    },
    button
    :{
        backgroundColor:colors.primary,
        color:colors.backgroundView,
        borderRadius: 16,
        paddingLeft: 20,
        paddingRight:20,
        textAlign: 'center',
        fontSize: 18,
        margin:10
    },
    icon
    :{
        bottom:50,
        width:140,
        height:140 
    },

})

export default styles