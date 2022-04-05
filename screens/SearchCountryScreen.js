import { View } from 'react-native';
import Heading from "../components/Heading";
import SearchButton from '../components/SearchButton';
import TextInputBox from "../components/TextInput"
//import styles from "../styles/ButtonsStyle"
import styles from "../styles/ViewStyle"

const SearchCountryScreen = () => {
    return (
        <View style={styles.viewContainer}>
          <Heading   text="CityPop" />
          <TextInputBox plcHolder="Enter a country..."/>
          <SearchButton />
       </View>
    )
  }
  export default SearchCountryScreen;