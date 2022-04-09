import { View } from 'react-native'
import Heading from '../components/Heading'
import ResultBox from '../components/ResultBox'
import styles from '../styles/ViewStyle'

// Result screen where user's search result for a city is presented.
const CityResult = ({ route }) => {
  return (
    <View style={styles.viewContainer}>
      <Heading text={route.params.name} />
      <ResultBox totalPopulation={route.params.population} />
    </View>
  )
}
export default CityResult
