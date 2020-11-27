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
        fontSize:16,
        bottom: 25
    },
    txt:
    {
        color: colors.primary,
        fontSize:16,
        paddingLeft:10
    },
    icon
    :{
        bottom:30,
        width:80,
        height:80
    },
    Btn
    :{
        top:45,
        backgroundColor: colors.primary,
        color:colors.backgroundView,
        borderRadius: 16,
        paddingLeft: 20,
        paddingRight:20,
        textAlign: 'center',
        fontSize: 18,
        margin:10
    },
    ViwInput
    :{
        width:310,
        bottom:20
    },
    imput
    :{
        height: 40,
        borderColor: colors.primary,
        color:colors.primary,
        backgroundColor: colors.backgroundInput,
        borderRadius:5,
        borderWidth: 2,
        marginBottom: 5,
        paddingLeft:10,
        textAlign: 'left'
    },
    dropdown
    :{
        backgroundColor:colors.backgroundInput,
        borderWidth:2,
        borderColor:colors.primary,
        borderRadius:14
       
    },
    dropdown_label
    :{
       color:colors.primary
    },
    dropdown_Container
    :{
        height:40,
        marginBottom:3
    },
    dropdown_item
    :{
        justifyContent: 'flex-start',
        backgroundColor:colors.backgroundInput,
        marginBottom:10
    },
    dropdown_style
    :{
        backgroundColor:colors.backgroundInput,
        borderColor:colors.primary,
        borderWidth:2,
       
    },
});

export default styles