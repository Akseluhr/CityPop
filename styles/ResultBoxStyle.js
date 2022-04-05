import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    resultBoxContainer:{
        width: "90%",
        // check elevation
        elevation: 8,
        borderRadius: 10,
        marginBottom: 10,
        height:100,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#002D62",
        justifyContent: 'center'
    },
    // TODO: Check names here and in ButtonStyle
    resultText: {
        fontSize: 30,
        textAlign: 'center'
    },
})

export default styles;