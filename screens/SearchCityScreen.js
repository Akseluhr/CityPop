import React from 'react';
import { View } from 'react-native';
import Heading from "../components/Heading";
import SearchButton from '../components/SearchButton';
import TextInputBox from "../components/TextInput"
import fetchGeoData from '../fetchData';
//import styles from "../styles/ButtonsStyle"
import styles from "../styles/ViewStyle";
import { useEffect } from 'react';

const SearchCityScreen = ({navigation}) => {
    return (
        <View style={styles.viewContainer}>
          <Heading   text="SEARCH BY CITY" />
          <TextInputBox plcHolder="Enter a city..."/>
          <SearchButton onPress={() => navigation.navigate("CityResults")}/>
       </View>
    )
  }
  export default SearchCityScreen;