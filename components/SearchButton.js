import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/ButtonsStyle';
//import Ionicons from '@expo/vector-icons/Ionicons';

const SearchButton= ({onPress}) => {
  return (

      <TouchableOpacity onPress={onPress}>
          <Image 
            style={styles.searchButton}
            source={require('../assets/search.png')} 
          /> 
      </TouchableOpacity>

  )
}
export default SearchButton;