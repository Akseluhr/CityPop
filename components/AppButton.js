import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/ButtonsStyle';

const AppButton= () => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Hej</Text>
      </TouchableOpacity>
    </View>
  )
}
export default AppButton;