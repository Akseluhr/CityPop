import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/ButtonsStyle';

const AppButton= (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{props.text}</Text>
      </TouchableOpacity>

      { /* if props.icon == true ? <show search icon> </show> : appbutonc */ }
    </View>
  )
}
export default AppButton;