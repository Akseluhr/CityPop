import { TextInput, View } from 'react-native'
import styles from '../styles/TextBoxStyle'

// CityPop's user input component.
const TextInputBox = (props) => {
  return (
    <View style={styles.textBoxContainer}>
      <TextInput style={styles.textBox} placeholder={props.plcHolder} value={props.value} onChangeText={props.onChangeText} />
    </View>
  )
}
export default TextInputBox
