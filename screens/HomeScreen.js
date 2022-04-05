import { View } from 'react-native';
import Heading from "../components/Heading";
import AppButton from "../components/AppButton";
//import styles from "../styles/ButtonsStyle"
import styles from "../styles/ViewStyle"

const HomeScreen = () => {
    return (
        <View style={styles.viewContainer}>
          <Heading   text="CityPop" />
          <AppButton icon = {true} text="Search by city" />
          <AppButton text="Search by country" />
       </View>
    )
  }
  export default HomeScreen;