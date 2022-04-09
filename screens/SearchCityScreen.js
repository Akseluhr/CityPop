import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import Heading from '../components/Heading'
import SearchButton from '../components/SearchButton'
import TextInputBox from '../components/TextInput'
import { fetchGeoData } from '../fetchData'
import styles from '../styles/ViewStyle'

// Screen where user searches for a city.
const SearchCityScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputText, setText] = useState('')
  const [cityPopulation, setPopulation] = useState()

  // Triggered as soon as the app gets an API response.
  const handleResponse = (r) => {
    if (r.totalResultsCount == 0) {
      alert('No results found, please try again.')
    } else {
      setPopulation(r.geonames[0].population)
      setName(r.geonames[0].name)
    }
  }
  // Triggered once the user presses the search button.
  const handleClick = () => {
    setIsLoading(true)
    fetchGeoData(inputText).then(response => { handleResponse(response), setIsLoading(false) })
  }

  // Changes in population and inputText will trigger useEffect.
  // If they are defined, navigate to next screen.
  useEffect(() => {
    if (cityPopulation > 0 && inputText != '') {
      navigation.navigate('CityResults', {
        name: inputText.toUpperCase(),
        population: cityPopulation
      })
    }
  }, [{ cityPopulation, inputText }])
  return (
    <View style={styles.viewContainer}>
      <Heading text='SEARCH BY CITY' />
      <TextInputBox plcHolder='Enter a city...' value={inputText} onChangeText={setText} />
      {!isLoading ? (<SearchButton onPress={handleClick} />) : <ActivityIndicator size='large' />}
    </View>
  )
}
export default SearchCityScreen
