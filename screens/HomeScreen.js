import { Button, View } from 'react-native';
import Heading from "../components/Heading";
import AppButton from "../components/AppButton";
//import styles from "../styles/ButtonsStyle"
import styles from "../styles/ViewStyle"

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.viewContainer}>
          <Heading text="CityPop" />
          <AppButton text="Search By City" onPress={() => navigation.navigate("SearchCity")} />
          <AppButton text="Search By Country" onPress={() => navigation.navigate("SearchCountry")} />
       </View>
    )
  }
  export default HomeScreen;