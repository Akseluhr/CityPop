import { Text, View } from 'react-native';
import styles from '../styles/ResultBoxStyle';

const ResultBox = (props) => {
  return (
    <View style={styles.resultBoxContainer}>
      <Text style={styles.resultText}>{props.totalPopulation}</Text>
    </View>
  )
}
export default ResultBox;