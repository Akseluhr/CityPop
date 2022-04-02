import { Text, TextInput, View } from 'react-native';
import styles from '../styles/TextBoxStyle';

//TODO: Check placeholder
const TextInputBox= () => {
  return (
    <View style={styles.viewContainer}>
      <TextInput style={styles.textBox} placeholder="Enter a city..."></TextInput>
    </View>
  )
}
export default TextInputBox;