import { StyleSheet, Platform } from 'react-native'

// Style for the resultbox.
const styles = StyleSheet.create({
  resultBoxContainer: {
    width: Platform.OS === 'ios' || Platform.OS === 'android' ? '90%' : '25%',
    elevation: 8,
    borderRadius: 10,
    marginBottom: 10,
    height: 150,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
    justifyContent: 'center'
  },
  populationText: {
    fontSize: 18,
    textAlign: 'center'
  },
  resultText: {
    fontSize: 30,
    textAlign: 'center'

  }
})

export default styles
