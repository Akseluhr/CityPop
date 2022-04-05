import { View } from 'react-native';
import Heading from "../components/Heading";
import SearchButton from '../components/SearchButton';
import TextInputBox from "../components/TextInput"
//import styles from "../styles/ButtonsStyle"
import styles from "../styles/ViewStyle"

const SearchCityScreen = () => {
    return (
        <View style={styles.viewContainer}>
          <Heading   text="SEARCH BY CITY" />
          <TextInputBox plcHolder="Enter a city..."/>
          <SearchButton />
       </View>
    )
  }
  export default SearchCityScreen;