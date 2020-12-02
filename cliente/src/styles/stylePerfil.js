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
    txt:
    {
        color: colors.primary,
        fontSize:16,
        paddingLeft:10,
        marginBottom:3
    },
    icon2
    :{
        right:53
    },
    ViwInput
    :{
        width:310,
        bottom:10
    },
    imput
    :{
        height: 40,
        borderColor: colors.primary,
        color:colors.colorText,
        borderBottomWidth:2,
        borderRadius:3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1.5,
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
        marginBottom:15
    },
    dropdown_style
    :{
        backgroundColor:colors.backgroundInput,
        borderColor:colors.primary,
        borderWidth:2,
       
    },
    itemEdit
    :{
        left:135,
        top:11
        
    }
});

export default styles