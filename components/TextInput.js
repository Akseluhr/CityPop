import { TextInput, View } from 'react-native';
import styles from '../styles/TextBoxStyle';

//TODO: Check placeholder
const TextInputBox= (props) => {
  return (
    <View style={styles.textBoxContainer}>
      <TextInput style={styles.textBox} placeholder={props.plcHolder}></TextInput>
    </View>
  )
}
export default TextInputBox;