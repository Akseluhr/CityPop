import { View } from 'react-native'
import Heading from '../components/Heading'
import AppButton from '../components/AppButton'
import styles from '../styles/ViewStyle'

// Result screen where user's country search results are presented.
const CountryResult = ({ navigation, route }) => {
  return (
    <View style={styles.viewContainer}>
      <Heading text={route.params.country} />
      <AppButton text={route.params.cities[0]} onPress={() => navigation.navigate('CityResults', { population: route.params.populations[0], name: route.params.cities[0] })} />
      <AppButton text={route.params.cities[1]} onPress={() => navigation.navigate('CityResults', { population: route.params.populations[1], name: route.params.cities[1] })} />
      <AppButton text={route.params.cities[2]} onPress={() => navigation.navigate('CityResults', { population: route.params.populations[2], name: route.params.cities[2] })} />
    </View>
  )
}
export default CountryResult
