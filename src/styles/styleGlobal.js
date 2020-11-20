import { StyleSheet} from 'react-native'

import colors from './colors/colors'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.backgroundView,
    },
    textExemplo:{
        backgroundColor:colors.secondary,
        color:colors.primary
    }

})

export default styles