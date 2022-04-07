import { View } from 'react-native';
import Heading from "../components/Heading";
import AppButton from "../components/AppButton";
import styles from "../styles/ViewStyle"

const CountryResult = ({navigation}) => {
    return (
        <View style={styles.viewContainer}>
          {/* Add api call results to text props of heading and buttons */}
          <Heading   text="todo" />
          <AppButton icon = {true} text="todo" onPress={() => navigation.navigate("CityResults")} />
          <AppButton text="todo" onPress={() => navigation.navigate("CityResults")} />
          <AppButton text="todo" onPress={() => navigation.navigate("CityResults")} />
       </View>
    )
  }
  export default CountryResult;