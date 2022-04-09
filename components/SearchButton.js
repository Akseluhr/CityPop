import { Image, TouchableOpacity } from 'react-native'
import styles from '../styles/ButtonsStyle'

// CityPop's search button (img of a magnifying glass).
const SearchButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.searchButton}
        source={require('../assets/search.png')}
      />
    </TouchableOpacity>
  )
}
export default SearchButton
