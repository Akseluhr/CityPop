import { View } from 'react-native';
import Heading from "../components/Heading";
import ResultBox from '../components/ResultBox';
import styles from "../styles/ViewStyle"

const CityResult = ({route}) => {
    return (
        <View style={styles.viewContainer}>
          {/* Add api call results to text props of heading and buttons */}
          <Heading   text={route.params.name} />
          <ResultBox totalPopulation={route.params.population}/>
       </View>
    )
  }
  export default CityResult;