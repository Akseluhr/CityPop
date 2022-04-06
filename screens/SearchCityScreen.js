import React from 'react';
import { View } from 'react-native';
import Heading from "../components/Heading";
import SearchButton from '../components/SearchButton';
import TextInputBox from "../components/TextInput"
import fetchGeoData from '../fetchData';
//import styles from "../styles/ButtonsStyle"
import styles from "../styles/ViewStyle";
import { useEffect } from 'react';

const SearchCityScreen = () => {
  const[text, setText] = React.useState('');

 /* useEffect(() => {
    setText(text)
    fetchGeoData()

  }, [onChangeText]) */

    return (
        <View style={styles.viewContainer}>
          <Heading   text="SEARCH BY CITY" />
          <TextInputBox />
            {/*onChangeText={onChangeText}
            value={text}
    plcHolder="Enter a city..."/> */ }
          <SearchButton />
       </View>
    )
  }
  export default SearchCityScreen;