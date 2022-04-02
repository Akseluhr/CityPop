import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/ButtonsStyle';
//import Ionicons from '@expo/vector-icons/Ionicons';

const SearchButton= () => {
  return (
    <View>
      <TouchableOpacity>
          <Image 
            style={styles.searchButton}
            source={require('../assets/search.png')} 
          /> 
      </TouchableOpacity>
    </View>
  )
}
export default SearchButton;