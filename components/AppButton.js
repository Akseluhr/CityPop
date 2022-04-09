import { Button, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/ButtonsStyle'

const AppButton = ({ text, onPress }) => {
  return (
    <View style={styles.appButtonContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.appButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  // { /* if props.icon == true ? <show search icon> </show> : appbutonc */ }

  )
}
export default AppButton
