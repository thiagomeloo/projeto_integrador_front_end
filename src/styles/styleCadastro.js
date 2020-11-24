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
    txtIcon:
    {
        color: colors.primary,
        fontFamily:'Roboto',
        fontSize:16
    },
    txt:
    {
        color: colors.primary,
        fontFamily:'Roboto',
        fontSize:16,
        paddingLeft:10
    },
    icon
    :{
        bottom:3,
        width:80,
        height:80
    },
    Btn
    :{
        top:30,
        backgroundColor: colors.primary,
        color:colors.backgroundView,
        borderRadius: 16,
        paddingLeft: 20,
        paddingRight:20,
        textAlign: 'center',
        fontFamily:'Roboto',
        fontSize: 18,
        margin:10
    },
    ViwInput
    :{
        top:15,
        width:310,
    },
    imput
    :{
        height: 40,
        borderColor: colors.primary,
        color:colors.primary,
        backgroundColor: colors.backgroundInput,
        borderRadius:14,
        borderWidth: 2,
        marginBottom: 5,
        paddingLeft:10,
        textAlign: 'left'
    },
    pickerView
    :{
      borderWidth:2,
      borderColor: colors.primary,
      borderRadius:14,
      color: colors.primary,
      backgroundColor:colors.backgroundInput,
      
    },
    picker
    :{
        height:38,
        color:colors.primary
    }


});

export default styles