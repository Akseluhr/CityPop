import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import Heading from "../components/Heading";
import SearchButton from '../components/SearchButton';
import TextInputBox from "../components/TextInput"
import { fetchGeoData } from '../fetchData';
//import styles from "../styles/ButtonsStyle"
import styles from "../styles/ViewStyle";

const SearchCityScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputText, setText] = useState('')
  const [population, setPopulation] = useState()

  const handleResponse = (r) => {
    if(r['totalResultsCount'] == 0){
      alert("No results found, please try again.")
    }else{
      setPopulation(r['geonames'][0]['population'])
      setName(r['geonames'][0]['name'])
    }
  }
  const handleClick = () =>{
    setIsLoading(true)
    fetchGeoData(inputText).then(response => {handleResponse(response), setIsLoading(false)})
  }

  useEffect(() => {
    if(population > 0 && inputText != ''){
      navigation.navigate("CityResults", {
        name: inputText.toUpperCase(),
        population: population,
      })
    }
  }, [{population, inputText}])
    return (
        <View style={styles.viewContainer}>
          <Heading   text="SEARCH BY CITY" />
          <TextInputBox plcHolder="Enter a city..." value={inputText} onChangeText={setText}/>
          {!isLoading ? (<SearchButton onPress={handleClick} />) : <ActivityIndicator size="large" />}
       </View>
    )
  }
  export default SearchCityScreen;