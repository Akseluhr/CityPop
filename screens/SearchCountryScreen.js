import { View } from 'react-native';
import Heading from "../components/Heading";
import SearchButton from '../components/SearchButton';
import TextInputBox from "../components/TextInput"
//import styles from "../styles/ButtonsStyle"
import styles from "../styles/ViewStyle"

const SearchCountryScreen = ({navigation}) => {
    return (
        <View style={styles.viewContainer}>
          <Heading   text="SEARCH BY COUNTRY" />
          <TextInputBox plcHolder="Enter a country..."/>
          <SearchButton onPress={() => navigation.navigate("CountryResults")}/>
       </View>
    )
  }
  export default SearchCountryScreen;