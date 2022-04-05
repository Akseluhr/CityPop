import { Text, View } from 'react-native';
import styles from '../styles/HeadingStyle';

const Heading = (props) => {
  return (
    <View>
      <Text style={styles.mainHeader}>{props.text}</Text>
    </View>
  )
}
export default Heading;