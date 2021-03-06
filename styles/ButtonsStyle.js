import { StyleSheet, Platform } from 'react-native'

// Styles for rectangle-like button and search button.
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#34568B',
    borderRadius: 10,
    marginBottom: 10,
    height: 70,
    width: Platform.OS === 'ios' || Platform.OS === 'android' ? '90%' : '25%',
    justifyContent: 'center'
  },
  appButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  searchButton: {
    width: 60,
    height: 60
  }
})
export default styles
