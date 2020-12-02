import { StyleSheet} from 'react-native'
import { greaterThan } from 'react-native-reanimated';
import { circle } from 'react-native/Libraries/Animated/src/Easing';

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
       backgroundColor:colors.backgroundView,
        paddingTop:25,
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
    icon2
    :{
        bottom:10,
        width:38,
        height:38
    },
    txtIcon:
    {
        color: colors.primary,
        fontSize:20,
        fontWeight: 'bold',
    },

});

export default styles