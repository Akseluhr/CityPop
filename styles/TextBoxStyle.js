import { StyleSheet, Platform } from 'react-native'

// Style for the text box, i.e. user input.
const styles = StyleSheet.create({
  textBoxContainer: {
    width: Platform.OS === 'ios' || Platform.OS === 'android' ? '90%' : '25%'
  },
  textBox: {
    elevation: 8,
    borderRadius: 10,
    marginBottom: 10,
    height: 70,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingLeft: 10,
    justifyContent: 'center',
    borderColor: 'black'
  }
})

export default styles
