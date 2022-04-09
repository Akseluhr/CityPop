import { StyleSheet, Platform } from 'react-native'

// Style for app header.
const styles = StyleSheet.create({
  mainHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: Platform.OS !== 'ios' || Platform.OS !== 'android' ? 100 : 0,
  }
})
export default styles
