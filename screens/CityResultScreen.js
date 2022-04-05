import { View } from 'react-native';
import Heading from "../components/Heading";
import ResultBox from '../components/ResultBox';
import styles from "../styles/ViewStyle"

const CityResult = () => {
    return (
        <View style={styles.viewContainer}>
          {/* Add api call results to text props of heading and buttons */}
          <Heading   text="todo: city name" />
          <ResultBox totalPopulation="todo: add population"/>
       </View>
    )
  }
  export default CityResult;