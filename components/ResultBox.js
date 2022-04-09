import { Text, View } from 'react-native'
import styles from '../styles/ResultBoxStyle'

// Box where population result is shown.
const ResultBox = (props) => {
  return (
    <View style={styles.resultBoxContainer}>
      <Text style={styles.populationText}>Population: </Text>
      <Text style={styles.resultText}>{props.totalPopulation}</Text>
    </View>
  )
}
export default ResultBox
