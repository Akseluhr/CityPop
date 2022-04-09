import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    mainHeader: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30,
      paddingBottom: Platform.OS !== 'ios' || Platform.OS !== 'android' ? 100 : 100,
    },
  });
export default styles