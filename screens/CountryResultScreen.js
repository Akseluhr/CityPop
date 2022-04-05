import { View } from 'react-native';
import Heading from "../components/Heading";
import AppButton from "../components/AppButton";
import styles from "../styles/ViewStyle"

const CountryResult = () => {
    return (
        <View style={styles.viewContainer}>
          {/* Add api call results to text props of heading and buttons */}
          <Heading   text="todo" />
          <AppButton icon = {true} text="todo" />
          <AppButton text="todo" />
          <AppButton text="todo" />
       </View>
    )
  }
  export default CountryResult;