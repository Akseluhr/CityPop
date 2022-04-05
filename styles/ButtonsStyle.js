import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    // TODO: check if safe to delete for each component
    buttonContainer:{
        width: "90%",

    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#002D62",
        borderRadius: 10,
        marginBottom: 10,
        height:70,
        justifyContent: 'center'
    },
    appButtonText: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    searchButton: {
        width:  60,
        height: 60
    }
  });
export default styles