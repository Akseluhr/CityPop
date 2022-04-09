import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    textBoxContainer:{
        width: Platform.OS === 'ios' || Platform.OS === 'android' ? '90%' : '25%',
    },
    // TODO: Check names here and in ButtonStyle
    textBox: {
        elevation: 8,
        borderRadius: 10,
        marginBottom: 10,
        height:70,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        paddingLeft: 10,
        justifyContent: 'center',
        borderColor: "black",
    },
})

export default styles;